export default function page() {
  return (
    <div>
      <div className="space-y-4">
        {/* Solid Colors */}
        <div className="bg-brand text-brand-foreground p-4 rounded-lg">
          Brand
        </div>

        <div className="bg-error text-error-foreground p-4 rounded-lg">
          Error
        </div>

        <div className="bg-success text-success-foreground p-4 rounded-lg">
          Success
        </div>

        <div className="bg-neutral text-neutral-foreground p-4 rounded-lg">
          Neutral
        </div>

        <div className="bg-highlight text-highlight-foreground p-4 rounded-lg">
          Highlight
        </div>

        <div className="bg-light text-light-foreground p-4 rounded-lg">
          Light
        </div>

        <div className="bg-gold text-gold-foreground p-4 rounded-lg">Gold</div>

        {/* Gradients */}
        <div className="bg-gradient-success text-white p-4 rounded-lg">
          Gradient Success
        </div>

        <div className="bg-gradient-orange text-black p-4 rounded-lg">
          Gradient Orange
        </div>

        <div className="bg-gradient-error text-white p-4 rounded-lg">
          Gradient Error
        </div>

        <div className="bg-gradient-amber text-black p-4 rounded-lg">
          Gradient Amber
        </div>

        <div className="bg-gradient-pink text-white p-4 rounded-lg">
          Gradient Pink
        </div>

        <div className="bg-gradient-gray text-white p-4 rounded-lg">
          Gradient Gray
        </div>

        <div className="bg-gradient-blue text-white p-4 rounded-lg">
          Gradient Blue
        </div>
        <div className="text-foreground p-4 rounded-lg shadow-card">
          Shadow Card
        </div>
      </div>
    </div>
  );
}
