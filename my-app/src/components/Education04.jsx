export const Education04 = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-20 row-gap-8 lg:grid-cols-1">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-teal-900 sm:text-4xl sm:leading-none">
          BMI Chart
        </h2>
        <div
          style={{
            marginTop: "-90px",
          }}
        >
          <img
            className="object-cover w-full  rounded shadow-lg "
            src="https://www.hdfclife.com/content/dam/hdfclifeinsurancecompany/financial-tools-calculators/bmi-calculator/BMI-chart.jpg"
            alt=""
          />
        </div>

        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
            About BMI
          </h2>
          <p className="text-base text-teal-700 md:text-lg">
            A person’s Body-Mass Index, or BMI, helps them check whether they’re
            a healthy weight for their height. If a person weighs less or more
            than the recommended weight for their height, it could lead to
            health issues in the future. While BMI is not the only factor
            individuals should consider while working on their health and
            fitness, it is a good starting point. To understand what your BMI
            is, you need to know your height and weight. You can then check your
            BMI against the BMI chart:
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
            BMI Formula
          </h2>
          <p className="text-base text-teal-700 md:text-lg">
            To arrive at your BMI figure, you need to know your weight in
            kilograms and your height in metres. If you know what your height is
            in centimetres, you can simply divide that number by 100. To
            calculate your BMI, you need to divide your weight in kilograms by
            your height in metres squared. If you know what your weight is in
            pounds and what your height is in inches, you can still calculate
            your BMI. You need to divide your weight in pounds by your height in
            inches squared. You then need to multiply the amount by 703. You can
            also use our BMI calculator to quickly find out your BMI. Simply
            input your height and weight to find out your BMI instantly.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-red-900 sm:text-4xl sm:leading-none">
            BMI for Kids
          </h2>
          <p className="text-base text-teal-700 md:text-lg">
            Your child’s body develops and changes rapidly. This is why a
            standard adult BMI chart will not work. Instead, to keep track of
            whether your child is the correct weight for their height, doctors
            use another chart. They start with a standard BMI calculation based
            on your child’s height and weight. The BMI value is then used to
            determine how your child compares to other children of the same age
            and gender. This is done with the help of percentages and
            percentiles. The weight categories for children, based on
            percentiles, are: Underweight – BMI less than the 5th percentile
            Normal Weight – BMI above the 5th percentile but lower than the 85th
            percentile Overweight – BMI above the 85th percentile but lower than
            the 95th percentile Obese – BMI greater than or equal to the 95th
            percentile
          </p>
        </div>
      </div>
    </div>
  );
};
