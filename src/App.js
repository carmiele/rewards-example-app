import './App.css';
import { useEffect, useState } from "react";
import { fetchData } from "./sample-data";

const allMonths = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

function App() {

  const [customerTxnData, setCustomerData] = useState({});
  const [customerPointsMap, setCustomerPointsMap] = useState({});
  const [recentMonths, setRecentMonths] = useState([]);

  useEffect(() => {
    getAllTransactions();
  }, []);

  useEffect(() => {
    // get the last 3 recent months
    getRecentMonths();

    // calculate all point totals for the available transaction data
    calculatePointTotals();
  }, [customerTxnData]);

  const getAllTransactions = (() => {
    fetchData().then((data) => {
      setCustomerData(data);
    });
  });

  const getRecentMonths = () => {
    const thisMonth = new Date().getMonth();

    const mostRecentMonths = [];
    for (let i = 0; i < 3; i++) {
      mostRecentMonths.push(allMonths[thisMonth - i]);
    }

    setRecentMonths(mostRecentMonths);
  };

  const calculatePointTotals = () => {
    const calculatedPoints = {};

    const thisMonth = new Date().getMonth();

    for (const key of Object.keys(customerTxnData)) {
      const monthsTotals = [];

      // calculate monthly points for last 3 months
      // for each customer
      for (let i = 0; i < 3; i++) {
        monthsTotals.push({
          month: thisMonth - i,
          total: getMonthlyPoints(thisMonth - i, key)
        });
      }

      calculatedPoints[key] = {
        customerId: key,
        monthsTotals: monthsTotals,
      };
    }
    setCustomerPointsMap(calculatedPoints);
  };
  /**
   * Gets points earned over
   * all time (last 3 months)
   * @param {*} customerId 
   * @returns 
   */
  const getPointsTotal = (customerId) => {
    let totals = 0;

    if (customerId in customerPointsMap && customerPointsMap[customerId]?.monthsTotals) {
      for (const month of customerPointsMap[customerId].monthsTotals) {
        totals += month.total;
      }
    }

    return totals;
  }

  /**
   * Gets dollars spent in transactions over
   * all time (last 3 months)
   * @param {*} customerId 
   * @returns 
   */
  const getTxnTotals = (customerId) => {
    let totals = 0;

    if (customerId in customerTxnData) {
      for (const transaction of customerTxnData[customerId].transactions) {
        totals += transaction.amount;
      }
    }

    return totals;
  }

  /**
   * Calculates the amount of money spent
   * by a customer in a given month
   * @param {*} month 
   * @param {*} customerId 
   * @returns 
   */
  const getMonthlySpend = (month, customerId) => {
    const today = new Date();
    const begOfMonth = new Date(today.getFullYear(), month, 1).getTime() / 1000;
    const endOfMonth = new Date(today.getFullYear(), month + 1, 0).getTime() / 1000;


    const filteredTransactions = customerTxnData[customerId].transactions.filter((t) => t.date > begOfMonth && t.date < endOfMonth);

    let amountTotal = 0;
    for (const transaction of filteredTransactions) {
      amountTotal += transaction.amount;

    }
    return amountTotal;
  }

  /**
   * Calculates the amount of points earned
   * by a customer in a given month
   * @param {*} month 
   * @param {*} customerId 
   * @returns 
   */
  const getMonthlyPoints = (month, customerId) => {
    const today = new Date();
    const begOfMonth = new Date(today.getFullYear(), month, 1).getTime() / 1000;
    const endOfMonth = new Date(today.getFullYear(), month + 1, 0).getTime() / 1000;

    // get transactions made during the month
    const filteredTransactions = customerTxnData[customerId].transactions.filter((t) => t.date > begOfMonth && t.date < endOfMonth);

    let pointsTotal = 0;
    for (const transaction of filteredTransactions) {
      if (transaction.amount > 50 && transaction.amount < 100) {
        pointsTotal += transaction.amount % 50;
      } else if (transaction.amount > 100) {

        // 50 (1x) points for amount spent 50 - 100
        // then add 2x the amount spent after 100
        pointsTotal += 50 + (transaction.amount % 100) * 2;
      }
    }
    return pointsTotal;
  };

  return (
    <div className="App" style={{ "padding": "20px" }}>
      <h1>Customer Points Over the Last 3 Months</h1>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            {
              recentMonths.map((month, key) => (
                <th key={key}>{month}</th>
              ))
            }
            <th>Totals</th>
          </tr>
        </thead>
        {
          customerTxnData && customerPointsMap && (<tbody>
            {
              Object.entries(customerPointsMap).map(([custId, customer], key) => (
                <tr className="table-row" key={key}>
                  <td className="table-cell">{customerTxnData[custId]?.name}</td>
                  {
                    customer.monthsTotals && customer?.monthsTotals?.map((month) => (
                      <td className="table-cell" key={custId + month.month}>
                        <p>{"$" + getMonthlySpend(month.month, custId) + " spent"}</p>
                        <p>{month.total + " pts"}</p>
                      </td>
                    ))
                  }
                  <td>
                    <p>{"$" + getTxnTotals(custId) + " spent"}</p>
                    <p>{(getPointsTotal(custId) || 0) + " pts"}</p>
                  </td>
                </tr>
              ))
            }
          </tbody>)
        }
      </table>
    </div>
  );
}

export default App;
