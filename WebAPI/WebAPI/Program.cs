using Microsoft.EntityFrameworkCore;
using Microsoft.Net.Http.Headers;
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
                          builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
                      });
});

// TODO: swagger configuration. Do later.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
// builder.Services.AddEndpointsApiExplorer();
// builder.Services.AddSwaggerGen();

// TODO: when production is set up, this will be if(dev environment)... else if(production env)....
builder.Services.AddDbContext<WebAPI.DummyContext>(options =>
                options.UseNpgsql(configuration.GetConnectionString("Postgres")));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<DummyContext>();
    context.Database.EnsureCreated();
    DbInitializer.Initialize(context);
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
