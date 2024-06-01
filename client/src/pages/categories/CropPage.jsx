import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../../reducer/searchReducer";
import { useDispatch } from "react-redux";

import { useNavigate, useParams } from "react-router";

import Container from "../../components/Container";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import CropModal from "./CropModal";
import Input from "../../components/Input";
import axios from "axios";
// import Calender from "../../components/Calender";
import { setDate } from "../../store/slices/dateSlice";

const STEPS = {
  REQUIREMENTS: 0,
  SEEDING: 1,
};

const CropPage = () => {
  const [cropDatas, setCropDatas] = useState(null);
  const [err, setErr] = useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchs = useDispatch();
  const { crop } = useParams();
  const navigate = useNavigate();

  const { step, totalSeeds, dateRange } = state;

  const startingDate = dateRange.startDate;

  const token = localStorage.getItem("token");

  // console.log(dateRange);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .post("http://localhost:5000/api/v1/admin/recipie/get", {
          crop,
        })
        .then((res) => {
          setCropDatas(res.data.recipe);
          // console.log(res.data.recipe);
          return res.data.recipe;
        })
        .catch((err) => {
          console.log(err);
          return null;
        });
    };
    fetchData();
  }, []);

  //   const successCallback = (position) => {
  //     console.log(position.coords);
  //   };

  //   const errorCallback = (error) => {
  //     console.log(error);
  //   };

  //   navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value <= 0) {
      setErr(true);
    } else {
      setErr(false);
    }

    dispatch({ type: "SET_TOTALSEEDS", payload: value * 5 });
  };

  const onBack = () => {
    dispatch({ type: "ON_BACK" });
  };

  const onNext = () => {
    dispatch({ type: "ON_NEXT" });
  };

  const actionLabel = () => {
    if (step === STEPS.SEEDING) {
      return "Back To Home";
    }

    return "Next";
  };

  const secondaryActionLabel = () => {
    if (step === STEPS.REQUIREMENTS) {
      return undefined;
    }

    return "Back";
  };
  console.log(startingDate);
  const onSubmit = async () => {
    if (step !== STEPS.SEEDING && !err) {
      return onNext();
    }

    if (!err) {
      dispatch({
        type: "SET_REQUIREMENTS_TO_STEP",
        payload: STEPS.REQUIREMENTS,
      });
      dispatchs(setDate(startingDate));
      // axios.post("http://localhost:5000/api/v1/admin/notify/mail", {
      //   startingDate,
      // });
      // navigate("/calender");
      navigate("/")
    }



    axios.defaults.headers.common = {
      Authorization: `Bearer ${token}`,
    };
  };

  //   const handlePestChange = (e) => {
  //     const selectedPest = e.target.value;
  //     dispatch({ type: "UPDATE_PEST", payload: selectedPest });
  //   };

  let title = (
    <>
      <div className="text-2xl">REQUIREMENTS</div>
    </>
  );

  let bodyContent = (
    <>
      <div>
        {cropDatas?.map(({ requirement, _id }) => (
          <div key={_id} className="mb-6">
            {requirement?.map((r, index) => {
              return (
                <div key={index} className="capitalize">
                  {index + 1}. {r}
                </div>
              );
            })}
          </div>
        ))}
        <Input
          label="Land Area(Ropani)*"
          type="number"
          placeholder="Enter the area of your land per ropani"
          onChange={handleChange}
        />
        <p>You need minimum {totalSeeds} kg seeds.</p>
      </div>
    </>
  );

  if (step === STEPS.SEEDING) {
    title = (
      <>
        <div className="text-2xl">SEEDING</div>
      </>
    );
    bodyContent = (
      <>
        <div className="flex flex-col gap-5 ">
          {/* <Calender
            value={dateRange}
            onChange={(value) =>
              dispatch({ type: "SET_DATE_RANGE", payload: value.selection })
            }
          /> */}

          {cropDatas?.map(({ isSeeding, recipe, _id }) => {
            const seeding = recipe?.seeding;
            const plantation = recipe?.plantation;
            const harvesting = recipe?.harvesting;
            return (
              <div key={_id}>
                {isSeeding && (
                  <>
                    <p>
                      Your Seed will be germinated in about{" "}
                      {seeding?.timePeriod[0]} to {seeding?.timePeriod[1]} days.
                    </p>
                    <p>
                      You should water your seed every{" "}
                      {seeding?.wateringTimeInterval} days.
                    </p>
                    <p>
                      Your crop height should be approximately{" "}
                      {seeding.healthyCropHeight} inches.
                    </p>
                    <p>
                      The best weather for growth of {crop} is{" "}
                      {seeding.weather.weatherType} with average temperature of{" "}
                      {seeding.weather.averageTemperature} deg celcius.
                    </p>
                  </>
                )}
                <>
                  <div className="my-4 text-2xl">Plantation</div>
                  <p>
                    Your Seed will be germinated in about{" "}
                    {plantation?.timePeriod[0]} to {plantation?.timePeriod[1]}{" "}
                    days.
                  </p>
                  <p>
                    You should water your seed every{" "}
                    {plantation?.wateringTimeInterval} days.
                  </p>
                  <p>
                    Your crop height should be approximately{" "}
                    {plantation?.healthyCropHeight} inches.
                  </p>
                  <p>
                    The best average temperature is{" "}
                    {plantation?.averageTemperature} deg celcius.
                  </p>
                </>
                <>
                  <div className="my-4 text-2xl">Harvesting</div>
                  <p>
                    Your Seed will be germinated in about{" "}
                    {harvesting?.timePeriod[0]} to {harvesting?.timePeriod[1]}{" "}
                    days.
                  </p>

                  <p>
                    The best weather for growth of {crop} is{" "}
                    {seeding.weather.weatherType} with average temperature of{" "}
                    {seeding.weather.averageTemperature} deg celcius.
                  </p>
                </>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar categories bottom menu search />
      <Container>
        <div className=" bg-slate-50 -my-10  cursor-pointer shadow-lg">
          <div className="p-6 ">
            <CropModal
              title={title}
              bodyContent={bodyContent}
              secondaryAction={step === STEPS.REQUIREMENTS ? undefined : onBack}
              secondaryActionLabel={secondaryActionLabel()}
              actionLabel={actionLabel()}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CropPage;
