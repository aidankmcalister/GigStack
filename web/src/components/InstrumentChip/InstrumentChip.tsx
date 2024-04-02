const InstrumentChip = ({ instrument }: { instrument: string }) => {
  return (
    <li className="rounded-md border border-main-blue px-1.5 text-main-blue shadow-sm">
      {instrument
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}
    </li>
  )
}

export default InstrumentChip
