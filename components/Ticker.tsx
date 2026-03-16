import styles from "./Ticker.module.css";

const ITEMS = [
  { name: "BTC/INR", price: "₹68,24,510", change: "+2.4%", up: true },
  { name: "ETH/INR", price: "₹2,84,320", change: "+1.8%", up: true },
  { name: "USDT/INR", price: "₹83.85", change: "+0.12%", up: true },
  { name: "SOL/INR", price: "₹12,480", change: "-0.6%", up: false },
  { name: "BNB/INR", price: "₹48,620", change: "+1.1%", up: true },
  { name: "XRP/INR", price: "₹44.10", change: "+3.2%", up: true },
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className={styles.tickerWrap}>
      <div className={styles.tickerInner}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.tickerItem}>
            <span className={styles.tName}>{item.name}</span>
            <span className={styles.tPrice}>{item.price}</span>

            <span
              className={`${styles.tChange} ${
                item.up ? styles.tUp : styles.tDown
              }`}
            >
              {item.change}
            </span>

            {i < doubled.length - 1 && (
              <span className={styles.tickerSep}>·</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
