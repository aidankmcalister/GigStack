const InstrumentChip = ({ instrument }: { instrument: string }) => {
  return (
    <li className="rounded-md border border-main-orange/80 px-1.5 text-main-orange/80 shadow-sm">
      {instrument
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}
    </li>
  )
}

export default InstrumentChip
