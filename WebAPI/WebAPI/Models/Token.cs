namespace WebApi.Models
{
    public class Token
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public Guid ShopId { get; set; }
        public long Timestamp { get; set; }     // UNIX Epoch (UM: seconds)

        public Token(Guid userId, Guid shopId, long timestamp) 
        {
            this.Id = Guid.NewGuid();
            this.UserId = UserId;
            this.ShopId = ShopId;
            this.Timestamp = DateTimeOffset.Now.ToUnixTimeSeconds();
        }
    }
}
