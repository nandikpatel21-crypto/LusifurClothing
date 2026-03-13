export default function BrandShowcase() {
  return (
    <section className="brandShowcase">

      {/* Background Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aYKYeS-ROngD8ipLY0Hx7vY469qDZ8jmMA&s"
        alt="Background"
        className="bgImage"
      />

      <div className="contentWrapper">

        {/* LEFT TEXT */}
        <div className="textSide">
          <h2>
            BUILT FOR THE <br />
            <span>DUDE</span>
          </h2>

          <p>
            Lucifur isn't just clothing.  
            It's confidence stitched in fabric.  
            Designed for those who own the night.
          </p>

          <button>EXPLORE NOW</button>
        </div>

        {/* RIGHT FLOATING IMAGES */}
        <div className="imageSide">

          <div className="shape shape1">
            <img src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b" alt="Fashion 1" />
          </div>

          <div className="shape shape2">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f" alt="Fashion 2" />
          </div>

          <div className="shape shape3">
            <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d" alt="Fashion 3" />
          </div>

        </div>
      </div>

     <style>{`
  .brandShowcase {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    color: white;
    padding: 100px 8%;
  }

  .bgImage {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    filter: blur(8px);
    opacity: 0.7;
    z-index: 0;
  }

  .contentWrapper {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 50px;
  }

  .textSide {
    flex: 1;
  }

  .textSide h2 {
    font-size: 60px;
    font-weight: 800;
    line-height: 1.2;
  }

  .textSide span {
    background: linear-gradient(90deg,#ff004f,#ff8c00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .textSide p {
    margin: 25px 0;
    font-size: 18px;
    color: #ddd;
    line-height: 1.7;
  }

  .textSide button {
    padding: 14px 35px;
    border-radius: 40px;
    border: none;
    background: linear-gradient(90deg,#ff004f,#ff8c00);
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: 0.4s;
  }

  .textSide button:hover {
    transform: scale(1.1);
  }

  .imageSide {
    flex: 1;
    position: relative;
    height: 500px;
  }

  .shape {
    position: absolute;
    width: 220px;
    height: 280px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 30px 80px rgba(0,0,0,0.6);
    animation: float 5s ease-in-out infinite;
  }

  .shape img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .shape1 {
    top: 0;
    left: 40px;
    transform: rotate(-8deg);
  }

  .shape2 {
    top: 120px;
    right: 60px;
    transform: rotate(6deg);
    animation-delay: 1s;
  }

  .shape3 {
    bottom: 0;
    left: 120px;
    transform: rotate(-4deg);
    animation-delay: 2s;
  }

  @keyframes float {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  /* ========================= */
  /* 🔥 RESPONSIVE PART 🔥 */
  /* ========================= */

  @media(max-width: 991px){

    .brandShowcase{
      padding: 80px 5%;
    }

    .contentWrapper{
      flex-direction: column;
      text-align: center;
    }

    .textSide h2{
      font-size: 38px;
    }

    .textSide p{
      font-size: 16px;
    }

    .imageSide{
      height: auto;
      margin-top: 60px;
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .shape{
      position: relative;
      width: 160px;
      height: 210px;
      animation: float 4s ease-in-out infinite;
    }

    .shape1,
    .shape2,
    .shape3{
      top: unset;
      left: unset;
      right: unset;
      bottom: unset;
      transform: none;
    }
  }

  @media(max-width: 480px){
    .textSide h2{
      font-size: 30px;
    }

    .shape{
      width: 130px;
      height: 180px;
    }
  }

`}</style>

    </section>
  );
}
