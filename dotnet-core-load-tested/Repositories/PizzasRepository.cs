using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_core_load_tested.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;

namespace dotnet_core_load_tested.Repositories
{
    public class PizzasRepository: IPizzasRepository
    {
        private readonly IConfiguration _config;

        public PizzasRepository(IConfiguration configuration)
        {
            _config = configuration;
        }

        public async Task<List<Pizza>> getAll()
        {
            using (var connection = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection")))
            {
                connection.Open();

                var results = await connection.QueryAsync<Pizza>("select * from pizza.pizza");
                
                return results.ToList();
            }
        } 
    }
}