'use client';

export default function SupporterCount() {
  // Placeholder numbers for the prototype
  const stats = {
    farmers: '12,847',
    veterans: '8,392',
    freedomFighters: '23,441',
    total: '44,680',
  };

  return (
    <div className="bg-gray-dark border border-gray-medium rounded-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-center">We Are Not Alone</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-accent mb-2">{stats.farmers}</div>
          <div className="text-sm text-gray-light uppercase tracking-wide">Farmers</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-accent mb-2">{stats.veterans}</div>
          <div className="text-sm text-gray-light uppercase tracking-wide">Veterans</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-accent mb-2">{stats.freedomFighters}</div>
          <div className="text-sm text-gray-light uppercase tracking-wide">Freedom Fighters</div>
        </div>
      </div>

      <div className="text-center pt-6 border-t border-gray-medium">
        <div className="text-5xl font-bold text-foreground mb-2">{stats.total}</div>
        <div className="text-lg text-gray-light">Total Supporters and Growing</div>
      </div>
    </div>
  );
}
