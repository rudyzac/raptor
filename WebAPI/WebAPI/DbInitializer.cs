using WebAPI;

public static class DbInitializer
    {
        public static void Initialize(DummyContext context)
        {
            context.Database.EnsureCreated();

            // Look for any dummies.
            if (context.Dummies.Any())
            {
                return;   // DB has been seeded
            }

        var dummies = new Dummy[]
        {
            new Dummy{Name="Carson"},
            new Dummy{Name="Meredith"},
            new Dummy{Name="Yan"},
            new Dummy{Name="Peggy"},
            new Dummy{Name="Laura"},
            new Dummy{Name="Nino"},
            new Dummy{Name="Carson"}
        };
                                                                      
        foreach (Dummy s in dummies)
        {
            context.Dummies.Add(s);
        }
        context.SaveChanges();
        }
    }
