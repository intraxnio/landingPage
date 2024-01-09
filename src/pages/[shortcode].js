// pages/[shortcode].js
import { useRouter } from 'next/router';

const ShortcodePage = () => {
  const router = useRouter();
  const { shortcode } = router.query;

  // Perform logic with the shortcode, e.g., redirect to app.linck.one
  if (shortcode) {
    // Redirect logic or any other processing
    console.log(`Redirecting to https://app.linck.one/${shortcode}`);
    const redirectUrl = `https://app.linck.one/${shortcode}`;
    window.location.href = redirectUrl;
  }

  return (
    <div>
      {/* <p>Content for shortcode: {shortcode}</p> */}
    </div>
  );
};

export default ShortcodePage;
