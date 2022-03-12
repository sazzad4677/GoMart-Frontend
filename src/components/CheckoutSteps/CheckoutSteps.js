import React from "react";

const CheckoutSteps = ({ status }) => {

  const steps = [
    { id: "S1", title: "your details", href: "#link", status: status  },
    { id: "S2", title: "order summary", href: "#link", status:status  },
    { id: "S3", title: "payment", href: "#link", status: status },
    { id: "S4", title: "confirmation", href: "#link", status: status  },
  ];

  return (
    <nav
      className="mx-auto w-full max-w-md bg-transparent px-2 md:max-w-5xl"
      aria-label="Progress steps"
    >
      <ol className="grid grid-cols-1 gap-1 overflow-hidden rounded-md md:auto-cols-fr md:grid-flow-col">
        {steps.map((step, index) => (
          <li key={step.id}>
            {/* :STATUS COMPLETED */}
            {step.status === "completed" && (
              <a
                href={step.href}
                className="flex items-center justify-center border-2 border-pink-800 bg-pink-800 py-1 px-4 text-base font-bold tracking-wide text-pink-200 hover:bg-pink-900 lg:text-lg"
              >
                <span className="mr-1">{`${index + 1}.`}</span>
                <span>{step.title}</span>
              </a>
            )}

            {/* :STATUS CURRENT */}
            {step.status === "current" && (
              <a
                href={step.href}
                className="flex items-center justify-center border-2 border-pink-800 bg-white py-1 px-4 text-base font-bold tracking-wide text-pink-800 lg:text-lg"
              >
                <span className="mr-1">{`${index + 1}.`}</span>
                <span>{step.title}</span>
              </a>
            )}

            {/* :STATUS UPCOMING */}
            {step.status === "upcoming" && (
              <a
                href={step.href}
                className="flex items-center justify-center border-2 border-pink-800 bg-pink-800 py-1 px-4 text-base font-bold tracking-wide text-pink-200 opacity-40 hover:opacity-50 lg:text-lg"
              >
                <span className="mr-1">{`${index + 1}.`}</span>
                <span>{step.title}</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default CheckoutSteps;
