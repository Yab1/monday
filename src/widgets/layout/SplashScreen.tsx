import Loading from "./Loading";

function SplashScreen() {
  return (
    <div className="gradient absolute inset-0">
      <Loading />
    </div>
  );
}

SplashScreen.displayName = "/src/widgets/layout/SplashScreen.tsx";

export default SplashScreen;
