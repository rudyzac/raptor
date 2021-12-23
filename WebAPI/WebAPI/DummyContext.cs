using Microsoft.EntityFrameworkCore;

namespace WebAPI
{
    public class DummyContext : DbContext
    {
        public DummyContext(DbContextOptions<DummyContext> options) : base(options)
        {
        }

        public DbSet<Dummy> Dummies { get; set; }       
    }
}