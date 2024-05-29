using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Dtos
{
    public class LoginResponse
    {
        public string? Token { get; set; }
        public string? UserGroup { get; set; }
        public string Message { get; set; } = default!;
    }
}