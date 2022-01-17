using WebAPI;
using WebAPI.Models;

public static class DbInitializer
{
    public static void Initialize(DummyContext context)
    {
        context.Database.EnsureCreated();

        if (context.Customers.Any())
        {
            return;   // DB has been seeded
        }

        var customers = new Customer[]
        {
            new Customer{ Id=Guid.NewGuid(), FirstName="Piro", LastName="Bero", Email="mailpirobero", Password="pwdpirobero" },
            new Customer{ Id=Guid.NewGuid(), FirstName="Lillo", LastName="Lallo", Email="lallalu", Password="zizipwd" }
        };

        foreach (Customer c in customers)
        {
            context.Customers.Add(c);
        }

        context.SaveChanges();
    }
}
