import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function Root() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <>
      <Header />
      <main className="container content">
        <div className="image_bg-root">
          <button className="btn text-root" onClick={handleClick}>
            Перейти к списку блюд
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Root };
