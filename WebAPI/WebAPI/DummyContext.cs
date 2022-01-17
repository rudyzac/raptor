using Microsoft.EntityFrameworkCore;
using WebAPI.Models;
namespace WebAPI
{
    public class DummyContext : DbContext
    {
        public DummyContext(DbContextOptions<DummyContext> options) : base(options)
        {
        }

        public DbSet<Dummy> Dummies { get; set; }
        public DbSet<Customer> Customers { get; set; }
    }
}