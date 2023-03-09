import React from 'react';

const Policy = () => {
  return (
    <div className="w-4/5 container mx-auto">
      <h1 className="my-10 text-4xl font-bold text-blue-700 text-center w-full">
        Rental Policy
      </h1>
      <p className="text-lg">
        All of our bounces are large in size measuring 15&apos; x 15&apos;,
        allowing up to 10 children to enjoy the fun at a time (depending on age,
        and size). To prevent sun burn in HOTLANTA, our bounces are roof covered
        allowing viewing and air circulation from netted sides. All equipment is
        sanitized on the same day of delivery to ensure clean and safe fun!
        <br />
        <br />
        Ensure there is at least 20&apos; x 20&apos; of flat grass surface for
        installation.
        <br />
      </p>
      <div>
        <h1 className="my-3 text-2xl font-bold text-blue-700 text-center lg:text-left w-full">
          Inflatable Rules
        </h1>
        <ul className="list-disc list-inside mb-10 text-lg">
          <li>Adult supervision is required at all times</li>
          <li>Shoes must be removed prior to entering bounce</li>
          <li>No food gum, sharp objects should be taken into the bounces</li>
          <li>No pets allowed in the bounces</li>
          <li>
            Signed rental agreement, waiver, and safety acknowledgement forms
            prior to setting up bounce, download below and return via email.
          </li>
          <li>Please do not tamper with JAI products</li>
          <li>
            If it rains on your parade we ask that you deflate the bounces to
            prevent serious injuries
          </li>
          <li>
            If winds are blowing over 20 miles per hour we also ask that bounces
            are deflated
          </li>
          <li>
            Please visit{' '}
            <a
              href="https://www.weather.gov/"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-custom-theme"
            >
              weather.gov
            </a>{' '}
            for party planning
          </li>
        </ul>
      </div>
      <div>
        <h1 className="my-3 text-2xl font-bold text-blue-700 text-center lg:text-left w-full">
          Requirements
        </h1>
        <ul className="list-disc list-inside mb-10 text-lg">
          <li>
            We require a $50 delivery charge that will be added to your total
            billed amount
          </li>
          <li>
            Security deposit will be refunded if all equipment is returned in
            the same condition as it was delivered
          </li>
          <li>
            We recommend a grounded outlet on a 20-amp circuit breaker in order
            to keep blower operational for inflation
          </li>
          <li>
            Please download and fill out the{' '}
            <a
              href="/forms/rental_agreement.pdf"
              alt="rental agreement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-custom-theme transition duration-200 ease-in-out"
            >
              rental agreement
            </a>
            {', '}
            <a
              href="/forms/waiver.pdf"
              alt="waiver"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-custom-theme transition duration-200 ease-in-out"
            >
              waiver
            </a>{' '}
            &{' '}
            <a
              href="/forms/safety_acknowledgement.pdf"
              alt="safety acknowledgement"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-custom-theme transition duration-200 ease-in-out"
            >
              safety acknowledgement
            </a>{' '}
            forms and return to us via email
          </li>
        </ul>
      </div>
      <div>
        <h1 className="my-3 text-2xl font-bold text-blue-700 text-center lg:text-left w-full">
          Cancellations
        </h1>
        <ul className="list-disc list-inside mb-10 text-lg">
          <li>
            There will be no charge if weather is the cause of any cancellations
            made before delivery
          </li>
          <li>
            There will be a $50 cancellation fee for any cancellations made
            within 5 days of the rental date or after delivery
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
