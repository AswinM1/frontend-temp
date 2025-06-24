import React from 'react';

function Pricing() {
  const plans = [
    {
      title: 'Starter',
      price: '$9/month',
      features: ['1 Project', 'Basic Support', '100MB Storage'],
    },
    {
      title: 'Pro',
      price: '$29/month',
      features: ['10 Projects', 'Priority Support', '1GB Storage'],
    },
    {
      title: 'Enterprise',
      price: '$99/month',
      features: ['Unlimited Projects', '24/7 Support', '10GB Storage'],
    },
  ];

  return (
    <div className="min-h-screen text-black flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl">
        {plans.map((plan, idx) => {
          const baseGradient = 'radial-gradient(circle at bottom right, #363636 0% , #1A1A1A 60%)';
          const bottomGradient = 'linear-gradient(to top,  yellow,purple  20%,#1e1e1e 45%)';

          const backgroundStyle =
            idx === 1
              ? ` ${bottomGradient}` // extra bottom gradient for center card
              : baseGradient;

          return (
            <div
              key={idx}
              className="border border-neutral-500 bg-neutral-800 rounded-xl px-8 pb-20 pt-15 h-fit flex flex-col justify-between hover:shadow-xl transition-all "
              style={{
                background: backgroundStyle,
              }}
            >  
              <div>
                <h2 className="text-2xl font-bold mb-4 font-sans tracking-tight text-white">{plan.title}</h2>
                <p className="text-3xl font-extrabold mb-6 tracking-tight text-white">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm flex items-center gap-2 tracking-tight text-white">
                      <span className="inline-block w-2 h-2 bg-white rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 tracking-tight text-black font-normal bg-white border border-black px-4 py-2 cursor-pointer hover:bg-neutral-200 hover:text-black rounded-md transition">
                Buy now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
