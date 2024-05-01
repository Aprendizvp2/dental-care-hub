import { forwardRef, useState } from "react";
import logosmile from "../../assets/img/logo-smile.png";
import { TransitionProps } from "@mui/material/transitions";
import { useNavigate } from "react-router-dom";
import { Box, LinearProgress, Slide } from "@mui/material";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    direction: "left" | "right";
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  const { direction, ...rest } = props;

  return (
    <Slide
      direction={direction}
      ref={ref}
      {...rest}
      timeout={{ appear: 1000, enter: 1000 }}
    />
  );
});
function Quiz() {
  const [step, setStep] = useState(1);
  const [transitionDirection, setTransitionDirection] = useState<
    "left" | "right"
  >("left");
  const navigate = useNavigate();
  const totalSteps = 20;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
      setTransitionDirection("left");
    } else {
      setStep(totalSteps);
      navigate("/quiz");
    }
  };

  const handleCustomOptionClick = () => {
    setStep(3);
    setTransitionDirection("left");
  };

  const handleGoProblemTestimony = () => {
    setStep(4);
    setTransitionDirection("left");
  };

  const handleGoEsteticTesimony = () => {
    setStep(21);
    setTransitionDirection("left");
  };

  const handleGoMissingToothTesimony = () => {
    setStep(22);
    setTransitionDirection("left");
  };

  const handleGoDisponibility = () => {
    setStep(5);
    setTransitionDirection("left");
  };

  const handleGoToPayment = () => {
    setStep(6);
    setTransitionDirection("left");
  };

  const handleGoPaymentCash = () => {
    setStep(7);
    setTransitionDirection("left");
  };

  const handleGoRevieceFinancing = () => {
    setStep(8);
    setTransitionDirection("left");
  };

  const handleGoOtherMethodPayment = () => {
    setStep(9);
    setTransitionDirection("left");
  };

  const handleGoToBonus = () => {
    setStep(10);
    setTransitionDirection("left");
  };

  const handleSureBonus = () => {
    setStep(13);
    setTransitionDirection("left");
  };

  const handleNotSureBonus = () => {
    setStep(14);
    setTransitionDirection("left");
  };

  const handleGoToBonusFinancing = () => {
    setStep(15);
    setTransitionDirection("left");
  };

  const handleSureBonusFinancing = () => {
    setStep(16);
    setTransitionDirection("left");
  };

  const handleNotSureBonusFinancing = () => {
    setStep(17);
    setTransitionDirection("left");
  };
  const handleGBonusoOtherMethodPayment = () => {
    setStep(18);
    setTransitionDirection("left");
  };

  const progressValue = (step / totalSteps) * 100;

  const getContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h1 className="text-xl md:text-3xl pt-4 font-bold text-white text-center">
              ¿Cuál es tu “perfil dental” y el plan ideal para ti?
            </h1>
            <p className="text-gray-300 text-sm md:text-lg text-center pt-4">
              Descubre en 2 minutos cómo transformar tu sonrisa en pocas semanas
              equilibrando tus hábitos de cuidado dental de forma natural.
            </p>
            <h1 className="text-xl md:text-2xl pt-8 font-bold text-white text-center">
              ¿Es la primera vez que deseas realizarte un diseño de sonrisa?
            </h1>
            <button
              className="bg-white rounded-3xl p-4 mt-6 w-full"
              onClick={handleContinue}
            >
              Es mi primera vez y quiero mejorar mi sonrisa con un diseño
            </button>
            <button
              className="bg-white rounded-3xl p-4 mt-4 w-full"
              onClick={handleCustomOptionClick}
            >
              Tengo diseño, pero quiero cambiarlo y mejorarlo
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white pt-4 text-center">
              ¿Cuál es la razón principal de hacerte un diseño de sonrisa?
            </h1>
            <button
              className="bg-white rounded-3xl p-4 mt-6 w-full"
              onClick={handleGoProblemTestimony}
            >
              Tengo problemas dentales que me hacen sentir mal, por eso quiero
              mejorar la apariencia de mi sonrisa
            </button>
            <button
              className="bg-white rounded-3xl p-4 mt-4 w-full"
              onClick={handleGoEsteticTesimony}
            >
              Lo hago por estética, quiero tener una sonrisa linda y perfecta
              como de actor famoso
            </button>
            <button
              className="bg-white rounded-3xl p-4 mt-4 w-full"
              onClick={handleGoMissingToothTesimony}
            >
              Me hace falta uno o más dientes, y quiero cubrir ese espacio con
              un diseño para sonreír con confianza
            </button>
          </div>
        );
      case 3:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white pt-4 text-center">
              ¿Cuál es la razón principal por la que quieres cambiar tú diseño?
            </h1>
            <textarea className="custom-file-input w-full mt-4" />
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              Desde que mejoré mi sonrisa, mi confianza ha aumentado y me siento
              mucho mejor conmigo mismo. ¡Gracias por hacer posible este cambio!
            </h1>
            <img
              src="https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-sucess-stories-6.webp"
              alt="alt"
              className="w-[350px] rounded-3xl"
            />
            <div className="flex justify-between flex-col md:flex-row mt-6 gap-4 w-full">
              <button
                className="bg-[#f9c981] font-bold rounded-3xl p-4 w-full"
                onClick={handleGoDisponibility}
              >
                Continuar
              </button>
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Tienes disponibilidad para un agendar una consulta? Recuerda que
              esto es un compromiso y apartamos la cita para ti, solo te pedimos
              que asistas.
            </h1>
            <div className="flex justify-between flex-col mt-6 gap-4 w-full">
              <button
                className="bg-[#f9c981] font-bold rounded-3xl p-4 w-full"
                onClick={handleGoToPayment}
              >
                Sí, deseo continuar con mi agendamiento.
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              Recuerda que solo realizas el pago el día de tu cita ¿El pago lo
              harás en efectivo o quieres hacerlo con financiamiento?.
            </h1>
            <button
              className="bg-white rounded-3xl p-4 mt-6 w-full"
              onClick={handleGoPaymentCash}
            >
              Deseo realizar el pago en efectivo y recibir un descuento
              adicional.
            </button>
            <button
              className="bg-white rounded-3xl p-4 mt-4 w-full"
              onClick={handleGoRevieceFinancing}
            >
              Estoy interesado, me gustaría recibir financiamiento.
            </button>
            <button
              className="bg-white rounded-3xl p-4 mt-4 w-full"
              onClick={handleGoOtherMethodPayment}
            >
              Me gustaría pagar con otro método de pago como tarjeta de crédito,
              pago híbrido, etc...
            </button>
          </div>
        );
      case 7:
        return (
          <div>
            <iframe
              className="w-full h-[150px] md:h-[300px] my-6"
              src="https://www.youtube.com/embed/FLPLgFKqqO8?si=ekNRDfbR8OQUa5Ks"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <button
              className="bg-white font-bold rounded-3xl p-4 mt-6 w-full"
              onClick={handleGoToBonus}
            >
              Continuar
            </button>
          </div>
        );
      case 8:
        return (
          <div>
            <iframe
              className="w-full h-[150px] md:h-[300px] my-6"
              src="https://www.youtube.com/embed/FLPLgFKqqO8?si=ekNRDfbR8OQUa5Ks"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <button
              className="bg-white font-bold rounded-3xl p-4 mt-6 w-full"
              onClick={handleGoToBonusFinancing}
            >
              Continuar
            </button>
          </div>
        );
      case 9:
        return (
          <div>
            <iframe
              className="w-full h-[150px] md:h-[300px] my-6"
              src="https://www.youtube.com/embed/FLPLgFKqqO8?si=ekNRDfbR8OQUa5Ks"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <button
              className="bg-white font-bold rounded-3xl p-4 mt-6 w-full"
              onClick={handleGBonusoOtherMethodPayment}
            >
              Continuar
            </button>
          </div>
        );
      case 10:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres recibir un bono de $1. 300 usd para realizarte tu diseño
              de sonrisa?.
            </h1>
            <div className="flex grid grid-rows-2 gap-6 pt-4 w-full">
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleSureBonus}
              >
                Sí me gustaría recibir el bono para realizarme mi diseño de
                sonrisa.
              </button>
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleNotSureBonus}
              >
                No estoy segur@ de poder pagar el tratamiento así me den el
                bono.
              </button>
            </div>
          </div>
        );
      case 11:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres recibir un bono de $1. 300 usd para realizarte tu diseño
              de sonrisa?.
            </h1>
          </div>
        );
      case 12:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres recibir un bono de $1. 300 usd para realizarte tu diseño
              de sonrisa?.
            </h1>
          </div>
        );
      case 13:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3134861106"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3134861106
              </a>
            </div>
          </div>
        );
      case 14:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3225324244"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3225324244
              </a>
            </div>
          </div>
        );
      case 15:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres recibir un bono de $1. 300 usd para realizarte tu diseño
              de sonrisa?.
            </h1>
            <div className="flex grid grid-rows-2 gap-6 pt-4 w-full">
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleSureBonusFinancing}
              >
                Sí me gustaría recibir el bono para realizarme mi diseño de
                sonrisa.
              </button>
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleNotSureBonusFinancing}
              >
                No estoy segur@ de poder pagar el tratamiento así me den el
                bono.
              </button>
            </div>
          </div>
        );
      case 16:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3134861106"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3134861106
              </a>
            </div>
          </div>
        );
      case 17:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3225324244"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3225324244
              </a>
            </div>
          </div>
        );
      case 18:
        return (
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres recibir un bono de $1. 300 usd para realizarte tu diseño
              de sonrisa?.
            </h1>
            <div className="flex grid grid-rows-2 gap-6 pt-4 w-full">
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleSureBonusFinancing}
              >
                Sí me gustaría recibir el bono para realizarme mi diseño de
                sonrisa.
              </button>
              <button
                className="bg-white rounded-3xl p-4 w-full"
                onClick={handleNotSureBonusFinancing}
              >
                No estoy segur@ de poder pagar el tratamiento así me den el
                bono.
              </button>
            </div>
          </div>
        );
      case 19:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3134861106"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3134861106
              </a>
            </div>
          </div>
        );
      case 20:
        return (
          <div className="w-full">
            <h1 className="text-lg md:text-2xl font-bold text-white py-4 text-center">
              ¿Quieres agendar una valoración para programar tu diseño de
              sonrisa?
            </h1>
            <div className="flex justify-center">
              <a
                className="bg-white text-sm md:text-xl text-center font-bold rounded-3xl p-4 mt-4 w-full"
                href="https://api.whatsapp.com/send?phone=3225324244"
                target="_blank"
                rel="noopener noreferrer"
              >
                +57 3225324244
              </a>
            </div>
          </div>
        );
      case 21:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              ¡Increíble transformación! Ahora tengo una sonrisa que siempre
              había deseado. Gracias por ayudarme a alcanzar este nivel de
              confianza y belleza.
            </h1>
            <img
              src="https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-sucess-stories-3.webp"
              alt="alt"
              className="w-[350px] rounded-3xl"
            />
            <div className="flex justify-between flex-col md:flex-row mt-6 gap-4 w-full">
              <button
                className="bg-[#f9c981] font-bold rounded-3xl p-4 w-full"
                onClick={handleGoDisponibility}
              >
                Continuar
              </button>
            </div>
          </div>
        );

      case 22:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white py-4 text-center">
              Gracias al increíble trabajo del equipo, ahora puedo sonreír sin
              preocupaciones. Recuperé mi confianza y estoy encantado con mi
              nueva sonrisa. ¡Muchas gracias!
            </h1>
            <img
              src="https://smilesbymariomontoya.com/wp-content/uploads/2022/09/dr-mario-montoya-sucess-stories-2.webp"
              alt="alt"
              className="w-[350px] rounded-3xl"
            />
            <div className="flex justify-between flex-col md:flex-row mt-6 gap-4 w-full">
              <button
                className="bg-[#f9c981] font-bold rounded-3xl p-4 w-full"
                onClick={handleGoDisponibility}
              >
                Continuar
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="px-8 md:px-20 flex justify-center">
        <Transition key={step} in direction={transitionDirection}>
          <div className="flex flex-col mt-24 sm:w-[90%] md:w-[75%] xl:w-[40%] bg-black p-10 rounded-3xl">
            <div className="flex justify-center">
              <img className="w-[70px]" src={logosmile} alt="logo" />
            </div>
            <Box className="w-full pt-4">
              <LinearProgress
                variant="determinate"
                value={progressValue}
                sx={{
                  backgroundColor: "#fae5c5",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#fbc068",
                  },
                }}
              />
            </Box>
            {getContent()}
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default Quiz;
