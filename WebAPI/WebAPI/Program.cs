using Microsoft.EntityFrameworkCore;
using WebAPI;

var builder = WebApplication.CreateBuilder(args);

var allowLocalhost = "AllowLocalhost";

ConfigurationManager configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: allowLocalhost,
                      builder =>
                      {
                          builder.WithOrigins("http://localhost:3000");
                      });
});

// TODO: swagger configuration. Do later.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// TODO: when production is set up, this will be if(dev environment)... else if(production env).... RESTORE after 1st heroku version is up
//builder.Services.AddDbContext<WebAPI.DummyContext>(options =>
//                options.UseNpgsql(configuration.GetConnectionString("Postgres")));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    ///TODO: restore, just to push 1st, no db version, to Heroku
    //var context = services.GetRequiredService<DummyContext>();
    //context.Database.EnsureCreated();
    //DbInitializer.Initialize(context);
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseCors(allowLocalhost);

app.UseAuthorization();

app.MapControllers();

app.Run();
