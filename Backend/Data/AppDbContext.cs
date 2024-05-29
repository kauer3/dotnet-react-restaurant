using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
  public class AppDbContext : DbContext
  {
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<AppUser> AppUsers { get; set; } = default!;
    public DbSet<Group> Groups { get; set; } = default!;

    protected override void OnModelCreating(ModelBuilder builder)
    {
      // TODO: Add seed data here

      base.OnModelCreating(builder);
    }
  }
}