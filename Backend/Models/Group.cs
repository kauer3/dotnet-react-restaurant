using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Group
    {
        public int GroupId { get; set; }
        public string Name { get; set; } = default!;
        public List<AppUser> AppUsers { get; set; } = new();
    }
}