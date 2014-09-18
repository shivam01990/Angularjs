using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public class CustomerProvider
    {
        public static List<tbl_customers> GetAllCustomer()
        {
            List<tbl_customers> _lstcustomers = null;
            using (rhtest1Entities db = new rhtest1Entities())
            {
                _lstcustomers = db.tbl_customers.ToList();
            }
            return _lstcustomers;
        }

    }
}
