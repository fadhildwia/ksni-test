function Price({currency, num, numSize } : { currency: string; num: number | string; numSize: string }) {
  return (
    <div className={numSize}>
      {currency}<span>{num}</span>
    </div>
  )
}

export default Price
