using System.Security;

namespace WebAPI.Models
{
    public class Shop
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; } // TODO: implement Address type (usare complex types)
        public string VATNumber { get; set; }
        public string Email { get; set; }
        public SecureString Password { get; set; }

        public Shop(string name, string vatNumber, string address, string email, SecureString password)
        {
            this.Id = Guid.NewGuid();
            this.Name = name;
            this.VATNumber = vatNumber;
            this.Address = address;
            this.Email = email;
            this.Password = password;
        }

        // TODO: Metodo da implementare (frontend): verifyVatNumber
    }
}
