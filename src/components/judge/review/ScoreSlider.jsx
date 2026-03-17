export default function ScoreSlider({ value, max, onChange }) {

    return (
        <input
            type="range"
            min="0"
            max={max}
            step="1"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="form-range"
        />
    );
}