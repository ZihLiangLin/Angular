using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace mod09API.Models
{
    public class MeetingRoomContext : DbContext
    {
        public MeetingRoomContext(DbContextOptions<MeetingRoomContext> options) : base(options) { }
        public DbSet<MeetingRoom> MeetingRooms { get; set; }
    }
}
