import { getCabins } from "@/lib/data-service";

const AboutDetails = async () => {
  const cabins = await getCabins();

  return (
    <div className="space-y-8">
      <p>
        Where nature&apos;s beauty and comfortable living blend seamlessly.
        Hidden away in the heart of the Italian Dolomites, this is your paradise
        away from home. But it&apos;s not just about the luxury cabins.
        It&apos;s about the experience of reconnecting with nature and enjoying
        simple pleasures with family.
      </p>
      <p>
        Our {cabins.length} luxury cabins provide a cozy base, but the real
        freedom and peace you&apos;ll find in the surrounding mountains. Wander
        through lush forests, breathe in the fresh air, and watch the stars
        twinkle above from the warmth of a campfire or your hot tub.
      </p>
      <p>
        This is where memorable moments are made, surrounded by nature&apos;s
        splendor. It&apos;s a place to slow down, relax, and feel the joy of
        being together in a beautiful setting.
      </p>
    </div>
  );
};

export default AboutDetails;
