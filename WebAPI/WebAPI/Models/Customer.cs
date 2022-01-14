using System.Security;

namespace WebApi.Models
{
    public class Customer
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public SecureString Password { get; set; }

        public Customer(string firstName, string lastName, string email, SecureString password) 
        {
            this.Id = Guid.NewGuid();
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Email = email;
            this.Password = password;
        }
    }
}
