using DataLayer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class CustomerServices
    {
        public static List<tbl_customers> GetAllCustomer()
        {
            return CustomerProvider.GetAllCustomer();
        }
    }
}
