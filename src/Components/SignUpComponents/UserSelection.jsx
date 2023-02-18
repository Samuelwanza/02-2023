import { gql, useMutation } from "@apollo/client";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import RightImage from "../UI/RightImage";
import FormButton from "../UI/FormButton";

const UserSelection = () => {
  const router = useRouter();
  const [user, setUser] = React.useState("");
  const [client, setclient] = React.useState(false);
  const [professional, setProfessional] = React.useState(false);

  const handlesubmit = () => {
    if (user === "client" || user === "professional") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          user,
        })
      );
      router.push("/signUp");
    } else {
      return toast.error("Kindly choose user type");
    }
  };

  return (
    <div className="font-Nunito w-full">
      <Head>
        <title>Sign Up</title>
        <meta name="description" />
      </Head>
      <div className=" h-full min-h-screen bg-white bg-cover outline  grid grid-col-1 md:h-full md:grid-cols-2 2xl:h-screen text-primary">
        <div className=" pt-16">
          <div className="flex w-full justify-center antialiased">
            <div className="w-full bg-white pt-6 pb-8 mb-4   px-2  md:w-full lg:w-5/6 xl:w-2/3">
              <h3 className=" text-primary text-3xl md:text-3xl mb-5 font-semibold">
                Create an account
              </h3>
              <p className="text-grey-900">How would you like to start?</p>

              <div className="mt-5 flex  ">
                {client ? (
                  <button
                    className="bg-secondary border-none text-white text-sm flex shadow   focus:shadow-outline focus:outline-none  font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1"
                    onClick={() => {
                      setUser("client");
                      setProfessional(false);
                    }}
                  >
                    <span className="flex place-items-center stroke-white stroke-2 ">
                      <svg
                        className="w-10"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.0001 27.0706C47.8753 27.6935 47.7755 28.3163 47.6134 28.9268C47.1019 30.92 46.1165 32.6392 44.682 34.1092C44.42 34.3833 44.3327 34.6449 44.3202 35.0062C44.3078 35.8409 44.3577 36.7005 44.183 37.5102C43.709 39.7651 41.8379 41.2849 39.4429 41.3099C35.813 41.3597 32.183 41.3223 28.5406 41.3223C27.9793 41.3223 27.6799 41.0482 27.6924 40.6122C27.6924 40.1762 27.9917 39.927 28.5655 39.927C32.1206 39.927 35.6757 39.927 39.2308 39.927C41.0146 39.927 42.3618 38.9802 42.7859 37.3981C42.9231 36.85 42.9231 36.2769 42.998 35.6042C38.5073 38.2951 34.1414 38.2826 29.7381 35.5917C29.314 36.0277 28.8525 36.4638 28.4283 36.9372C28.3535 37.0244 28.341 37.1863 28.341 37.3109C28.3784 37.8217 28.2038 38.2577 27.8421 38.619C25.946 40.5126 24.0624 42.4186 22.1414 44.2997C20.9813 45.4334 19.1726 45.396 18.0624 44.2873C16.9273 43.1412 16.9148 41.3597 18.0874 40.1762C19.9585 38.2826 21.8545 36.4139 23.7381 34.5203C24.0999 34.1591 24.5364 33.9971 25.0479 34.0345C25.1976 34.047 25.3847 33.9847 25.4845 33.885C25.9211 33.4863 26.3327 33.0628 26.7942 32.6268C25.4346 30.621 24.761 28.4285 24.736 26.0117C20.8192 26.0117 16.9522 26.0117 13.0105 26.0117C13.0105 26.8339 13.0229 27.6561 13.0105 28.4783C12.998 29.8985 12.0375 30.9699 10.6404 31.1443C9.25578 31.3187 7.90859 30.2598 7.77137 28.8645C7.72148 28.3662 7.74642 27.8679 7.73395 27.3696C7.73395 26.9211 7.73395 26.4726 7.73395 25.9743C6.48655 25.8372 5.33894 25.5133 4.26617 24.9029C3.19341 24.2925 2.30775 23.4703 1.53436 22.3989C1.52189 22.6231 1.50942 22.7477 1.49694 22.8847C1.49694 27.3571 1.49694 31.817 1.49694 36.2894C1.49694 38.457 2.9564 39.9395 5.12688 39.9395C8.25786 39.952 11.3888 39.9395 14.5323 39.9395C14.657 39.9395 14.7818 39.9395 14.9065 39.9395C15.4928 39.952 15.8171 40.2011 15.8046 40.6496C15.7922 41.0856 15.4678 41.3472 14.8816 41.3472C11.6258 41.3472 8.37012 41.3597 5.10193 41.3472C2.54476 41.3348 0.736028 39.8274 0.174698 37.2984C0.162224 37.2237 0.124802 37.1614 0.0998535 37.0867C0.0998535 29.45 0.0998535 21.8258 0.0998535 14.1892C0.124802 14.1643 0.14975 14.1518 0.162224 14.1144C0.860768 11.3363 2.56971 9.99089 5.42626 9.99089C7.93353 9.99089 10.4408 9.99089 12.9606 9.99089C13.1227 9.99089 13.2974 9.99089 13.4969 9.99089C13.4969 9.19359 13.4969 8.44612 13.4969 7.69865C13.5094 4.92055 15.5053 2.87747 18.287 2.84009C20.919 2.81518 23.551 2.84009 26.1955 2.82764C27.2059 2.82764 28.1414 3.10171 28.9522 3.69968C30.3119 4.68385 30.9481 6.04176 30.9606 7.7111C30.9606 8.45857 30.9606 9.19359 30.9606 9.97843C31.1851 9.97843 31.3597 9.97843 31.5219 9.97843C34.0416 9.97843 36.5739 9.97843 39.0936 9.97843C39.4304 9.97843 39.7797 10.0033 40.1165 10.0407C42.2371 10.2899 44.0209 12.0091 44.2579 14.1269C44.3701 15.1111 44.3327 16.1201 44.3327 17.1043C44.3327 17.4033 44.42 17.6151 44.6321 17.8393C46.1539 19.3592 47.1643 21.178 47.6633 23.2709C47.8005 23.844 47.8878 24.4295 48.0001 25.0026C48.0001 25.7002 48.0001 26.3854 48.0001 27.0706ZM42.9855 16.4067C42.9231 15.5346 42.9606 14.7622 42.8109 14.0148C42.4616 12.3703 41.0396 11.3737 39.156 11.3737C27.867 11.3737 16.578 11.3737 5.28904 11.3737C5.15183 11.3737 5.00214 11.3737 4.86493 11.3862C2.89403 11.4983 1.50942 12.9558 1.49694 14.9242C1.48447 15.8211 1.49694 16.7306 1.49694 17.6275C1.50942 19.9073 2.40755 21.7635 4.2038 23.1588C5.2142 23.9561 6.37428 24.3921 7.72148 24.5167C7.68405 23.682 7.78384 22.9221 8.3327 22.2868C8.86908 21.6639 9.54268 21.3275 10.3784 21.3275C11.0271 21.3275 11.6009 21.5393 12.0874 21.9629C12.8608 22.6231 13.0728 23.5076 13.0105 24.5043C16.9647 24.5043 20.8816 24.5043 24.7984 24.5043C25.4969 20.2935 27.7048 17.1666 31.5718 15.4225C35.4637 13.6784 39.2558 14.1144 42.9855 16.4067ZM26.1331 25.9992C26.1206 31.6052 30.7111 36.2022 36.3244 36.2146C41.9751 36.2271 46.578 31.655 46.5905 26.0241C46.603 20.3932 42.0125 15.7838 36.3743 15.7838C30.7485 15.7713 26.1456 20.3558 26.1331 25.9992ZM29.5011 9.95351C29.5136 9.84139 29.5385 9.75419 29.5385 9.66698C29.526 8.80739 29.5635 7.9478 29.4762 7.10067C29.314 5.51853 27.9917 4.27274 26.3951 4.24783C23.5884 4.21046 20.7818 4.21046 17.9751 4.24783C16.5281 4.27274 15.1809 5.39395 14.9938 6.81414C14.8566 7.83568 14.9689 8.88214 14.9689 9.94106C15.4055 9.94106 15.867 9.94106 16.3784 9.94106C16.3784 9.20604 16.3784 8.50841 16.3784 7.81077C16.3784 6.42795 17.0895 5.71785 18.4865 5.71785C20.9689 5.71785 23.4387 5.71785 25.9211 5.71785C27.3431 5.71785 28.0416 6.42795 28.0416 7.83568C28.0416 8.53332 28.0416 9.23096 28.0416 9.94106C28.5655 9.95351 29.0146 9.95351 29.5011 9.95351ZM17.788 9.94106C20.7693 9.94106 23.6882 9.94106 26.6446 9.94106C26.6446 9.14375 26.657 8.38383 26.6446 7.6239C26.6446 7.23771 26.3951 7.13804 26.0458 7.13804C25.1102 7.1505 24.1747 7.13804 23.2391 7.13804C21.63 7.13804 20.0333 7.13804 18.4242 7.13804C18.0624 7.13804 17.8005 7.22525 17.8005 7.63636C17.7755 8.39628 17.788 9.15621 17.788 9.94106ZM22.9772 37.2486C21.6924 38.5318 20.42 39.8025 19.1477 41.0732C18.4741 41.7583 18.4367 42.6553 19.0354 43.2782C19.6466 43.9135 20.5822 43.8762 21.2683 43.191C22.4907 41.9826 23.7132 40.7493 24.9356 39.5284C24.998 39.4661 25.0479 39.3914 25.0853 39.354C24.3743 38.6439 23.7007 37.9712 22.9772 37.2486ZM11.6009 26.3106C11.6009 25.4635 11.6258 24.6537 11.5884 23.8564C11.5635 23.2336 11.0271 22.7726 10.4034 22.7602C9.79216 22.7477 9.20588 23.1464 9.16846 23.7443C9.11856 24.5915 9.15599 25.4386 9.15599 26.3231C9.9668 26.3106 10.7527 26.3106 11.6009 26.3106ZM9.15599 27.7682C9.10609 28.4409 9.04372 29.0763 9.66742 29.5123C10.0666 29.7988 10.6279 29.8113 11.0271 29.5372C11.6757 29.1012 11.6383 28.4534 11.5759 27.7682C10.7651 27.7682 9.97927 27.7682 9.15599 27.7682ZM26.9439 37.5102C26.9065 37.4355 26.894 37.3981 26.8816 37.3856C26.4699 36.9621 26.0583 36.551 25.6342 36.1274C24.8483 35.3426 24.8483 35.3426 24.0999 36.1648C24.0874 36.1897 24.0749 36.2146 24.0874 36.1897C24.7984 36.8998 25.4845 37.585 26.183 38.2826C26.4075 38.0335 26.6695 37.7718 26.9439 37.5102ZM26.5323 34.8442C26.8566 35.2055 27.156 35.5419 27.393 35.816C27.7922 35.4298 28.1913 35.0436 28.5531 34.6948C28.2662 34.3958 27.9668 34.0719 27.63 33.7106C27.2807 34.0719 26.9315 34.4331 26.5947 34.7944C26.5323 34.8193 26.5073 34.8692 26.5323 34.8442Z"
                          fill="#273240"
                        />
                        <path
                          d="M36.3742 17.5532C40.2911 17.5906 43.6715 20.269 44.5572 24.0562C44.6694 24.5545 44.4948 24.9158 44.0956 25.0155C43.6715 25.1151 43.3597 24.9033 43.21 24.405C42.4615 21.6643 40.7401 19.8704 37.9709 19.1852C34.1164 18.2259 30.1372 20.8296 29.4636 24.7165C28.7651 28.8026 31.5343 32.54 35.5759 32.976C39.0936 33.3497 42.2245 31.1945 43.1601 27.7686C43.21 27.5818 43.2723 27.37 43.3846 27.2205C43.5967 26.934 43.9085 26.8841 44.2204 27.0461C44.5447 27.2205 44.6694 27.507 44.5821 27.8683C44.0208 30.1979 42.7484 32.0417 40.6778 33.2252C37.5593 35.0066 34.4033 34.9194 31.4844 32.839C28.5655 30.771 27.4304 27.8185 28.1414 24.3303C28.8649 20.7798 31.1726 18.6121 34.7027 17.7775C35.2391 17.628 35.8129 17.6155 36.3742 17.5532Z"
                          fill="#273240"
                        />
                      </svg>
                      Service seeker
                    </span>
                  </button>
                ) : (
                  <button
                    className="text-primary hover:bg-secondary hover:border-none hover:text-white text-sm flex shadow  border-2 border-primary focus:shadow-outline focus:outline-none  font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1"
                    onClick={() => {
                      setUser("client");
                      setclient(true);
                      setProfessional(false);
                    }}
                  >
                    <span className="flex place-items-center hover:stroke-white hover:stroke-2 ">
                      <svg
                        className="w-10"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M48.0001 27.0706C47.8753 27.6935 47.7755 28.3163 47.6134 28.9268C47.1019 30.92 46.1165 32.6392 44.682 34.1092C44.42 34.3833 44.3327 34.6449 44.3202 35.0062C44.3078 35.8409 44.3577 36.7005 44.183 37.5102C43.709 39.7651 41.8379 41.2849 39.4429 41.3099C35.813 41.3597 32.183 41.3223 28.5406 41.3223C27.9793 41.3223 27.6799 41.0482 27.6924 40.6122C27.6924 40.1762 27.9917 39.927 28.5655 39.927C32.1206 39.927 35.6757 39.927 39.2308 39.927C41.0146 39.927 42.3618 38.9802 42.7859 37.3981C42.9231 36.85 42.9231 36.2769 42.998 35.6042C38.5073 38.2951 34.1414 38.2826 29.7381 35.5917C29.314 36.0277 28.8525 36.4638 28.4283 36.9372C28.3535 37.0244 28.341 37.1863 28.341 37.3109C28.3784 37.8217 28.2038 38.2577 27.8421 38.619C25.946 40.5126 24.0624 42.4186 22.1414 44.2997C20.9813 45.4334 19.1726 45.396 18.0624 44.2873C16.9273 43.1412 16.9148 41.3597 18.0874 40.1762C19.9585 38.2826 21.8545 36.4139 23.7381 34.5203C24.0999 34.1591 24.5364 33.9971 25.0479 34.0345C25.1976 34.047 25.3847 33.9847 25.4845 33.885C25.9211 33.4863 26.3327 33.0628 26.7942 32.6268C25.4346 30.621 24.761 28.4285 24.736 26.0117C20.8192 26.0117 16.9522 26.0117 13.0105 26.0117C13.0105 26.8339 13.0229 27.6561 13.0105 28.4783C12.998 29.8985 12.0375 30.9699 10.6404 31.1443C9.25578 31.3187 7.90859 30.2598 7.77137 28.8645C7.72148 28.3662 7.74642 27.8679 7.73395 27.3696C7.73395 26.9211 7.73395 26.4726 7.73395 25.9743C6.48655 25.8372 5.33894 25.5133 4.26617 24.9029C3.19341 24.2925 2.30775 23.4703 1.53436 22.3989C1.52189 22.6231 1.50942 22.7477 1.49694 22.8847C1.49694 27.3571 1.49694 31.817 1.49694 36.2894C1.49694 38.457 2.9564 39.9395 5.12688 39.9395C8.25786 39.952 11.3888 39.9395 14.5323 39.9395C14.657 39.9395 14.7818 39.9395 14.9065 39.9395C15.4928 39.952 15.8171 40.2011 15.8046 40.6496C15.7922 41.0856 15.4678 41.3472 14.8816 41.3472C11.6258 41.3472 8.37012 41.3597 5.10193 41.3472C2.54476 41.3348 0.736028 39.8274 0.174698 37.2984C0.162224 37.2237 0.124802 37.1614 0.0998535 37.0867C0.0998535 29.45 0.0998535 21.8258 0.0998535 14.1892C0.124802 14.1643 0.14975 14.1518 0.162224 14.1144C0.860768 11.3363 2.56971 9.99089 5.42626 9.99089C7.93353 9.99089 10.4408 9.99089 12.9606 9.99089C13.1227 9.99089 13.2974 9.99089 13.4969 9.99089C13.4969 9.19359 13.4969 8.44612 13.4969 7.69865C13.5094 4.92055 15.5053 2.87747 18.287 2.84009C20.919 2.81518 23.551 2.84009 26.1955 2.82764C27.2059 2.82764 28.1414 3.10171 28.9522 3.69968C30.3119 4.68385 30.9481 6.04176 30.9606 7.7111C30.9606 8.45857 30.9606 9.19359 30.9606 9.97843C31.1851 9.97843 31.3597 9.97843 31.5219 9.97843C34.0416 9.97843 36.5739 9.97843 39.0936 9.97843C39.4304 9.97843 39.7797 10.0033 40.1165 10.0407C42.2371 10.2899 44.0209 12.0091 44.2579 14.1269C44.3701 15.1111 44.3327 16.1201 44.3327 17.1043C44.3327 17.4033 44.42 17.6151 44.6321 17.8393C46.1539 19.3592 47.1643 21.178 47.6633 23.2709C47.8005 23.844 47.8878 24.4295 48.0001 25.0026C48.0001 25.7002 48.0001 26.3854 48.0001 27.0706ZM42.9855 16.4067C42.9231 15.5346 42.9606 14.7622 42.8109 14.0148C42.4616 12.3703 41.0396 11.3737 39.156 11.3737C27.867 11.3737 16.578 11.3737 5.28904 11.3737C5.15183 11.3737 5.00214 11.3737 4.86493 11.3862C2.89403 11.4983 1.50942 12.9558 1.49694 14.9242C1.48447 15.8211 1.49694 16.7306 1.49694 17.6275C1.50942 19.9073 2.40755 21.7635 4.2038 23.1588C5.2142 23.9561 6.37428 24.3921 7.72148 24.5167C7.68405 23.682 7.78384 22.9221 8.3327 22.2868C8.86908 21.6639 9.54268 21.3275 10.3784 21.3275C11.0271 21.3275 11.6009 21.5393 12.0874 21.9629C12.8608 22.6231 13.0728 23.5076 13.0105 24.5043C16.9647 24.5043 20.8816 24.5043 24.7984 24.5043C25.4969 20.2935 27.7048 17.1666 31.5718 15.4225C35.4637 13.6784 39.2558 14.1144 42.9855 16.4067ZM26.1331 25.9992C26.1206 31.6052 30.7111 36.2022 36.3244 36.2146C41.9751 36.2271 46.578 31.655 46.5905 26.0241C46.603 20.3932 42.0125 15.7838 36.3743 15.7838C30.7485 15.7713 26.1456 20.3558 26.1331 25.9992ZM29.5011 9.95351C29.5136 9.84139 29.5385 9.75419 29.5385 9.66698C29.526 8.80739 29.5635 7.9478 29.4762 7.10067C29.314 5.51853 27.9917 4.27274 26.3951 4.24783C23.5884 4.21046 20.7818 4.21046 17.9751 4.24783C16.5281 4.27274 15.1809 5.39395 14.9938 6.81414C14.8566 7.83568 14.9689 8.88214 14.9689 9.94106C15.4055 9.94106 15.867 9.94106 16.3784 9.94106C16.3784 9.20604 16.3784 8.50841 16.3784 7.81077C16.3784 6.42795 17.0895 5.71785 18.4865 5.71785C20.9689 5.71785 23.4387 5.71785 25.9211 5.71785C27.3431 5.71785 28.0416 6.42795 28.0416 7.83568C28.0416 8.53332 28.0416 9.23096 28.0416 9.94106C28.5655 9.95351 29.0146 9.95351 29.5011 9.95351ZM17.788 9.94106C20.7693 9.94106 23.6882 9.94106 26.6446 9.94106C26.6446 9.14375 26.657 8.38383 26.6446 7.6239C26.6446 7.23771 26.3951 7.13804 26.0458 7.13804C25.1102 7.1505 24.1747 7.13804 23.2391 7.13804C21.63 7.13804 20.0333 7.13804 18.4242 7.13804C18.0624 7.13804 17.8005 7.22525 17.8005 7.63636C17.7755 8.39628 17.788 9.15621 17.788 9.94106ZM22.9772 37.2486C21.6924 38.5318 20.42 39.8025 19.1477 41.0732C18.4741 41.7583 18.4367 42.6553 19.0354 43.2782C19.6466 43.9135 20.5822 43.8762 21.2683 43.191C22.4907 41.9826 23.7132 40.7493 24.9356 39.5284C24.998 39.4661 25.0479 39.3914 25.0853 39.354C24.3743 38.6439 23.7007 37.9712 22.9772 37.2486ZM11.6009 26.3106C11.6009 25.4635 11.6258 24.6537 11.5884 23.8564C11.5635 23.2336 11.0271 22.7726 10.4034 22.7602C9.79216 22.7477 9.20588 23.1464 9.16846 23.7443C9.11856 24.5915 9.15599 25.4386 9.15599 26.3231C9.9668 26.3106 10.7527 26.3106 11.6009 26.3106ZM9.15599 27.7682C9.10609 28.4409 9.04372 29.0763 9.66742 29.5123C10.0666 29.7988 10.6279 29.8113 11.0271 29.5372C11.6757 29.1012 11.6383 28.4534 11.5759 27.7682C10.7651 27.7682 9.97927 27.7682 9.15599 27.7682ZM26.9439 37.5102C26.9065 37.4355 26.894 37.3981 26.8816 37.3856C26.4699 36.9621 26.0583 36.551 25.6342 36.1274C24.8483 35.3426 24.8483 35.3426 24.0999 36.1648C24.0874 36.1897 24.0749 36.2146 24.0874 36.1897C24.7984 36.8998 25.4845 37.585 26.183 38.2826C26.4075 38.0335 26.6695 37.7718 26.9439 37.5102ZM26.5323 34.8442C26.8566 35.2055 27.156 35.5419 27.393 35.816C27.7922 35.4298 28.1913 35.0436 28.5531 34.6948C28.2662 34.3958 27.9668 34.0719 27.63 33.7106C27.2807 34.0719 26.9315 34.4331 26.5947 34.7944C26.5323 34.8193 26.5073 34.8692 26.5323 34.8442Z"
                          fill="#273240"
                        />
                        <path
                          d="M36.3742 17.5532C40.2911 17.5906 43.6715 20.269 44.5572 24.0562C44.6694 24.5545 44.4948 24.9158 44.0956 25.0155C43.6715 25.1151 43.3597 24.9033 43.21 24.405C42.4615 21.6643 40.7401 19.8704 37.9709 19.1852C34.1164 18.2259 30.1372 20.8296 29.4636 24.7165C28.7651 28.8026 31.5343 32.54 35.5759 32.976C39.0936 33.3497 42.2245 31.1945 43.1601 27.7686C43.21 27.5818 43.2723 27.37 43.3846 27.2205C43.5967 26.934 43.9085 26.8841 44.2204 27.0461C44.5447 27.2205 44.6694 27.507 44.5821 27.8683C44.0208 30.1979 42.7484 32.0417 40.6778 33.2252C37.5593 35.0066 34.4033 34.9194 31.4844 32.839C28.5655 30.771 27.4304 27.8185 28.1414 24.3303C28.8649 20.7798 31.1726 18.6121 34.7027 17.7775C35.2391 17.628 35.8129 17.6155 36.3742 17.5532Z"
                          fill="#273240"
                        />
                      </svg>
                      Service seeker
                    </span>
                  </button>
                )}
                {professional ? (
                  <button
                    className=" bg-secondary border-none text-white text-sm  flex shadow   ml-5 focus:shadow-outline focus:outline-none font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1"
                    onClick={() => {
                      setUser("professional");
                      setProfessional(true);
                      setclient(false);
                    }}
                  >
                    <span className="flex place-items-center stroke-white stroke-2 ">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.710716 39.0308C0.710716 37.5857 0.710716 36.1406 0.710716 34.683C0.72319 33.051 1.67122 32.1043 3.29284 32.0918C4.35313 32.0918 5.41342 32.0918 6.47371 32.0918C7.47163 32.0918 8.2076 32.5278 8.68161 33.3999C8.80635 33.6366 8.94356 33.6739 9.18057 33.6864C9.97891 33.7362 10.7149 33.5618 11.4508 33.2753C12.6608 32.8019 13.9082 32.4904 15.218 32.4406C17.376 32.3659 19.1972 33.1881 20.8438 34.4837C20.981 34.5834 21.1307 34.683 21.2429 34.8076C21.8417 35.58 22.64 35.7046 23.5631 35.6547C24.7107 35.5924 25.8708 35.6547 27.0184 35.6298C27.8916 35.6174 28.6899 35.8416 29.3386 36.4271C29.5756 36.6389 29.7253 36.5019 29.9124 36.4022C32.0454 35.3059 34.1785 34.2221 36.3116 33.1258C37.1598 32.6898 38.0454 32.5154 38.981 32.7894C40.166 33.1507 40.9269 33.9356 41.1764 35.1564C41.4384 36.4396 41.0018 37.4985 40.0163 38.3207C39.3303 38.8938 38.5569 39.3921 37.8209 39.9153C34.8646 42.0207 31.9082 44.1261 28.9519 46.219C27.8666 46.9914 26.719 47.6267 25.3594 47.826C24.2741 47.9755 23.2513 47.7388 22.2284 47.4648C18.561 46.4806 14.9061 45.459 11.2263 44.5247C10.5028 44.3378 9.71695 44.4375 8.95604 44.425C8.86872 44.425 8.74398 44.5745 8.68161 44.6867C8.18265 45.5712 7.42174 45.9947 6.42381 45.9947C5.35105 45.9947 4.27828 46.0072 3.19304 45.9947C1.68369 45.9823 0.710716 44.9981 0.698242 43.5032C0.710716 42.0207 0.710716 40.5257 0.710716 39.0308ZM8.99346 42.5564C9.5049 42.5564 9.97891 42.5315 10.4529 42.5688C10.902 42.5937 11.3635 42.6311 11.7876 42.7432C15.4675 43.7274 19.1598 44.6742 22.8271 45.7331C24.586 46.2439 26.1452 45.9947 27.5922 44.9234C27.6296 44.8984 27.6671 44.8735 27.7045 44.8486C31.3095 42.2823 34.9145 39.7284 38.5194 37.1621C39.3427 36.5766 39.5922 35.8291 39.193 35.1813C38.8064 34.5211 38.0205 34.3965 37.1224 34.845C35.0018 35.9288 32.8812 37.0251 30.7606 38.0965C30.5111 38.221 30.4488 38.3581 30.4612 38.6322C30.586 40.6752 29.1639 42.2076 27.1057 42.22C25.3095 42.2325 23.5257 42.22 21.7294 42.22C20.9935 42.22 20.27 42.2325 19.534 42.22C18.9727 42.2076 18.5984 41.8463 18.586 41.3355C18.561 40.7998 18.9352 40.4012 19.4966 40.3638C19.6338 40.3513 19.771 40.3638 19.9207 40.3638C22.2783 40.3638 24.6234 40.3638 26.981 40.3638C27.9789 40.3638 28.6026 39.8156 28.6151 38.9685C28.6151 38.1089 27.9789 37.5483 27.0059 37.5483C25.6712 37.5483 24.324 37.4985 22.9893 37.5608C21.9165 37.6106 21.0683 37.2867 20.3074 36.5268C19.3968 35.6174 18.3115 34.9322 17.0517 34.5709C15.5174 34.1349 14.0205 34.3591 12.561 34.8948C11.4259 35.3184 10.3032 35.6921 9.06831 35.5924C9.04336 35.5924 9.01841 35.6174 8.98099 35.6423C8.99346 37.9221 8.99346 40.2143 8.99346 42.5564ZM2.58182 39.0183C2.58182 40.4759 2.58182 41.9459 2.58182 43.4035C2.58182 43.9766 2.74398 44.1385 3.29284 44.1385C4.31571 44.1385 5.35105 44.151 6.37392 44.1385C6.89783 44.1385 7.08494 43.9641 7.08494 43.4409C7.08494 40.5133 7.08494 37.5982 7.08494 34.6706C7.08494 34.1349 6.9103 33.9729 6.38639 33.9729C5.376 33.9729 4.3656 33.9729 3.35521 33.9729C2.71903 33.9729 2.58182 34.0975 2.58182 34.7329C2.58182 36.1655 2.58182 37.5982 2.58182 39.0183Z"
                          fill="#273240"
                        />
                        <g clip-path="url(#clip0_67_722)">
                          <path
                            d="M20.0491 7.93516C20.0491 7.32974 20.0491 6.75458 20.0491 6.17943C20.0491 5.13506 20.4739 4.29503 21.3159 3.67447C21.8166 3.30365 22.3855 3.10688 23.0151 3.10688C25.488 3.09932 27.9609 3.09175 30.4413 3.10688C32.0495 3.12202 33.339 4.40855 33.3921 6.01293C33.4073 6.54268 33.3997 7.07243 33.3997 7.60218C33.3997 7.70056 33.3997 7.80651 33.3997 7.94273C33.5438 7.94273 33.65 7.94273 33.7638 7.94273C35.4326 7.94273 37.1015 7.94273 38.7703 7.94273C39.7109 7.94273 40.4239 8.48005 40.6287 9.34278C40.6667 9.51684 40.6743 9.69847 40.6818 9.8801C40.6818 11.4088 40.6818 12.9451 40.6894 14.4738C40.6894 15.0035 40.5377 15.45 40.1964 15.8511C40.1205 15.9419 40.0978 16.1084 40.0978 16.2371C40.0902 19.6577 40.0902 23.086 40.0978 26.5066C40.0978 26.9002 40.0522 27.2786 39.8398 27.6267C39.4909 28.1943 38.9827 28.4894 38.3151 28.5273C38.262 28.5273 38.2014 28.5273 38.1483 28.5273C30.5475 28.5273 22.9392 28.5273 15.3385 28.5273C14.4055 28.5273 13.7 28.0353 13.4725 27.2104C13.4118 26.9758 13.389 26.7261 13.389 26.4839C13.3814 23.0708 13.389 19.6577 13.3814 16.2447C13.3814 16.0857 13.3056 15.8965 13.207 15.7679C12.9263 15.3971 12.7898 14.996 12.7898 14.5343C12.7974 12.9753 12.7898 11.4164 12.7898 9.84983C12.7746 8.70708 13.5332 7.94273 14.6786 7.94273C16.3474 7.93516 18.0162 7.94273 19.685 7.94273C19.7988 7.93516 19.905 7.93516 20.0491 7.93516ZM20.0491 16.4414C20.0491 16.6457 20.0567 16.8122 20.0491 16.9863C20.0264 17.7279 19.5333 18.2274 18.7899 18.2426C18.4107 18.2501 18.0314 18.2501 17.6521 18.2426C16.9087 18.2199 16.4233 17.7279 16.4081 16.9787C16.4081 16.8047 16.4081 16.6306 16.4081 16.449C15.7785 16.449 15.1944 16.449 14.5875 16.449C14.5875 16.5701 14.5875 16.6684 14.5875 16.7744C14.5875 20.021 14.5875 23.26 14.5875 26.5066C14.5875 27.1423 14.7772 27.3315 15.422 27.3315C22.9544 27.3315 30.4944 27.3315 38.0269 27.3315C38.6641 27.3315 38.8537 27.1423 38.8537 26.4991C38.8537 23.2525 38.8537 20.0134 38.8537 16.7668C38.8537 16.6685 38.8537 16.5625 38.8537 16.4566C38.2317 16.4566 37.6476 16.4566 37.0332 16.4566C37.0332 16.6382 37.0332 16.7971 37.0332 16.956C37.0256 17.7355 36.5325 18.2274 35.7588 18.2426C35.3871 18.2501 35.023 18.2501 34.6513 18.2426C33.9079 18.2199 33.4149 17.7204 33.3997 16.9787C33.3921 16.8047 33.3997 16.623 33.3997 16.4414C28.9318 16.4414 24.5094 16.4414 20.0491 16.4414ZM37.0332 15.1927C37.7007 15.1927 38.3227 15.2079 38.9447 15.1852C39.2482 15.1776 39.4606 14.9127 39.4606 14.5797C39.4682 12.9829 39.4682 11.3861 39.4606 9.78172C39.4606 9.39576 39.2178 9.17629 38.831 9.15359C38.7551 9.15359 38.6793 9.15359 38.6034 9.15359C30.6765 9.15359 22.7572 9.15359 14.8303 9.15359C14.7468 9.15359 14.6558 9.15359 14.5724 9.15359C14.2234 9.17629 13.9807 9.39576 13.9731 9.75145C13.9655 11.371 13.9655 12.9829 13.9731 14.6024C13.9731 14.9581 14.2234 15.1852 14.6027 15.1927C15.1489 15.2003 15.7026 15.1927 16.2488 15.1927C16.2943 15.1927 16.3398 15.1776 16.4005 15.1624C16.4005 14.9884 16.4005 14.8295 16.4005 14.6705C16.4081 13.8759 16.9011 13.384 17.7052 13.3764C18.0541 13.3764 18.4031 13.3689 18.7596 13.3764C19.5333 13.3916 20.034 13.8911 20.0491 14.663C20.0491 14.8295 20.0491 14.996 20.0491 15.17C24.517 15.17 28.947 15.17 33.3921 15.17C33.3921 14.9581 33.3845 14.7689 33.3921 14.5797C33.4301 13.8986 33.9079 13.4067 34.5906 13.384C35.0078 13.3689 35.4251 13.3689 35.8423 13.384C36.5401 13.4143 37.0104 13.9138 37.0332 14.6176C37.0332 14.7992 37.0332 14.9808 37.0332 15.1927ZM32.1784 7.9276C32.1784 7.32217 32.186 6.74701 32.1784 6.16429C32.1709 5.11236 31.4123 4.31774 30.3579 4.31017C27.9305 4.29503 25.5032 4.29503 23.0758 4.31017C22.1579 4.31774 21.4145 4.9156 21.3008 5.80103C21.2173 6.49727 21.2856 7.20865 21.2856 7.92003C21.6725 7.92003 22.0517 7.92003 22.4613 7.92003C22.4613 7.3373 22.4538 6.76972 22.4613 6.20213C22.4689 5.77076 22.6889 5.52859 23.0985 5.52859C25.5032 5.52102 27.9154 5.52102 30.32 5.52859C30.7296 5.52859 30.9496 5.77076 30.9572 6.20213C30.9647 6.67133 30.9572 7.14811 30.9572 7.61731C30.9572 7.7157 30.9572 7.81408 30.9572 7.9276C31.3971 7.9276 31.7688 7.9276 32.1784 7.9276ZM23.7054 7.92003C25.7307 7.92003 27.7257 7.92003 29.7359 7.92003C29.7359 7.51893 29.7359 7.14054 29.7359 6.75458C27.7181 6.75458 25.7155 6.75458 23.7054 6.75458C23.7054 7.14811 23.7054 7.5265 23.7054 7.92003ZM18.8051 17.009C18.8051 16.1992 18.8051 15.4198 18.8051 14.6251C18.4031 14.6251 18.0238 14.6251 17.6369 14.6251C17.6369 15.4273 17.6369 16.2219 17.6369 17.009C18.039 17.009 18.4107 17.009 18.8051 17.009ZM34.6286 14.6176C34.6286 15.4273 34.6286 16.2068 34.6286 17.0014C35.0306 17.0014 35.4099 17.0014 35.8043 17.0014C35.8043 16.1992 35.8043 15.4122 35.8043 14.6176C35.4099 14.6176 35.0306 14.6176 34.6286 14.6176Z"
                            fill="#273240"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_67_722">
                            <rect
                              width="29.1892"
                              height="29.1513"
                              fill="white"
                              transform="translate(12.0996 1.24561)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Service Provider
                    </span>
                  </button>
                ) : (
                  <button
                    className="text-primary  hover:bg-secondary hover:border-none hover:text-white text-sm  flex shadow border-2 border-primary ml-5 focus:shadow-outline focus:outline-none font-bold px-4 md:text-sm  rounded-md mt-8 mb-3 py-1"
                    onClick={() => {
                      setUser("professional");
                      setclient(false);
                      setProfessional(true);
                    }}
                  >
                    <span className="flex place-items-center hover:stroke-white hover:stroke-2 ">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.710716 39.0308C0.710716 37.5857 0.710716 36.1406 0.710716 34.683C0.72319 33.051 1.67122 32.1043 3.29284 32.0918C4.35313 32.0918 5.41342 32.0918 6.47371 32.0918C7.47163 32.0918 8.2076 32.5278 8.68161 33.3999C8.80635 33.6366 8.94356 33.6739 9.18057 33.6864C9.97891 33.7362 10.7149 33.5618 11.4508 33.2753C12.6608 32.8019 13.9082 32.4904 15.218 32.4406C17.376 32.3659 19.1972 33.1881 20.8438 34.4837C20.981 34.5834 21.1307 34.683 21.2429 34.8076C21.8417 35.58 22.64 35.7046 23.5631 35.6547C24.7107 35.5924 25.8708 35.6547 27.0184 35.6298C27.8916 35.6174 28.6899 35.8416 29.3386 36.4271C29.5756 36.6389 29.7253 36.5019 29.9124 36.4022C32.0454 35.3059 34.1785 34.2221 36.3116 33.1258C37.1598 32.6898 38.0454 32.5154 38.981 32.7894C40.166 33.1507 40.9269 33.9356 41.1764 35.1564C41.4384 36.4396 41.0018 37.4985 40.0163 38.3207C39.3303 38.8938 38.5569 39.3921 37.8209 39.9153C34.8646 42.0207 31.9082 44.1261 28.9519 46.219C27.8666 46.9914 26.719 47.6267 25.3594 47.826C24.2741 47.9755 23.2513 47.7388 22.2284 47.4648C18.561 46.4806 14.9061 45.459 11.2263 44.5247C10.5028 44.3378 9.71695 44.4375 8.95604 44.425C8.86872 44.425 8.74398 44.5745 8.68161 44.6867C8.18265 45.5712 7.42174 45.9947 6.42381 45.9947C5.35105 45.9947 4.27828 46.0072 3.19304 45.9947C1.68369 45.9823 0.710716 44.9981 0.698242 43.5032C0.710716 42.0207 0.710716 40.5257 0.710716 39.0308ZM8.99346 42.5564C9.5049 42.5564 9.97891 42.5315 10.4529 42.5688C10.902 42.5937 11.3635 42.6311 11.7876 42.7432C15.4675 43.7274 19.1598 44.6742 22.8271 45.7331C24.586 46.2439 26.1452 45.9947 27.5922 44.9234C27.6296 44.8984 27.6671 44.8735 27.7045 44.8486C31.3095 42.2823 34.9145 39.7284 38.5194 37.1621C39.3427 36.5766 39.5922 35.8291 39.193 35.1813C38.8064 34.5211 38.0205 34.3965 37.1224 34.845C35.0018 35.9288 32.8812 37.0251 30.7606 38.0965C30.5111 38.221 30.4488 38.3581 30.4612 38.6322C30.586 40.6752 29.1639 42.2076 27.1057 42.22C25.3095 42.2325 23.5257 42.22 21.7294 42.22C20.9935 42.22 20.27 42.2325 19.534 42.22C18.9727 42.2076 18.5984 41.8463 18.586 41.3355C18.561 40.7998 18.9352 40.4012 19.4966 40.3638C19.6338 40.3513 19.771 40.3638 19.9207 40.3638C22.2783 40.3638 24.6234 40.3638 26.981 40.3638C27.9789 40.3638 28.6026 39.8156 28.6151 38.9685C28.6151 38.1089 27.9789 37.5483 27.0059 37.5483C25.6712 37.5483 24.324 37.4985 22.9893 37.5608C21.9165 37.6106 21.0683 37.2867 20.3074 36.5268C19.3968 35.6174 18.3115 34.9322 17.0517 34.5709C15.5174 34.1349 14.0205 34.3591 12.561 34.8948C11.4259 35.3184 10.3032 35.6921 9.06831 35.5924C9.04336 35.5924 9.01841 35.6174 8.98099 35.6423C8.99346 37.9221 8.99346 40.2143 8.99346 42.5564ZM2.58182 39.0183C2.58182 40.4759 2.58182 41.9459 2.58182 43.4035C2.58182 43.9766 2.74398 44.1385 3.29284 44.1385C4.31571 44.1385 5.35105 44.151 6.37392 44.1385C6.89783 44.1385 7.08494 43.9641 7.08494 43.4409C7.08494 40.5133 7.08494 37.5982 7.08494 34.6706C7.08494 34.1349 6.9103 33.9729 6.38639 33.9729C5.376 33.9729 4.3656 33.9729 3.35521 33.9729C2.71903 33.9729 2.58182 34.0975 2.58182 34.7329C2.58182 36.1655 2.58182 37.5982 2.58182 39.0183Z"
                          fill="#273240"
                        />
                        <g clip-path="url(#clip0_67_722)">
                          <path
                            d="M20.0491 7.93516C20.0491 7.32974 20.0491 6.75458 20.0491 6.17943C20.0491 5.13506 20.4739 4.29503 21.3159 3.67447C21.8166 3.30365 22.3855 3.10688 23.0151 3.10688C25.488 3.09932 27.9609 3.09175 30.4413 3.10688C32.0495 3.12202 33.339 4.40855 33.3921 6.01293C33.4073 6.54268 33.3997 7.07243 33.3997 7.60218C33.3997 7.70056 33.3997 7.80651 33.3997 7.94273C33.5438 7.94273 33.65 7.94273 33.7638 7.94273C35.4326 7.94273 37.1015 7.94273 38.7703 7.94273C39.7109 7.94273 40.4239 8.48005 40.6287 9.34278C40.6667 9.51684 40.6743 9.69847 40.6818 9.8801C40.6818 11.4088 40.6818 12.9451 40.6894 14.4738C40.6894 15.0035 40.5377 15.45 40.1964 15.8511C40.1205 15.9419 40.0978 16.1084 40.0978 16.2371C40.0902 19.6577 40.0902 23.086 40.0978 26.5066C40.0978 26.9002 40.0522 27.2786 39.8398 27.6267C39.4909 28.1943 38.9827 28.4894 38.3151 28.5273C38.262 28.5273 38.2014 28.5273 38.1483 28.5273C30.5475 28.5273 22.9392 28.5273 15.3385 28.5273C14.4055 28.5273 13.7 28.0353 13.4725 27.2104C13.4118 26.9758 13.389 26.7261 13.389 26.4839C13.3814 23.0708 13.389 19.6577 13.3814 16.2447C13.3814 16.0857 13.3056 15.8965 13.207 15.7679C12.9263 15.3971 12.7898 14.996 12.7898 14.5343C12.7974 12.9753 12.7898 11.4164 12.7898 9.84983C12.7746 8.70708 13.5332 7.94273 14.6786 7.94273C16.3474 7.93516 18.0162 7.94273 19.685 7.94273C19.7988 7.93516 19.905 7.93516 20.0491 7.93516ZM20.0491 16.4414C20.0491 16.6457 20.0567 16.8122 20.0491 16.9863C20.0264 17.7279 19.5333 18.2274 18.7899 18.2426C18.4107 18.2501 18.0314 18.2501 17.6521 18.2426C16.9087 18.2199 16.4233 17.7279 16.4081 16.9787C16.4081 16.8047 16.4081 16.6306 16.4081 16.449C15.7785 16.449 15.1944 16.449 14.5875 16.449C14.5875 16.5701 14.5875 16.6684 14.5875 16.7744C14.5875 20.021 14.5875 23.26 14.5875 26.5066C14.5875 27.1423 14.7772 27.3315 15.422 27.3315C22.9544 27.3315 30.4944 27.3315 38.0269 27.3315C38.6641 27.3315 38.8537 27.1423 38.8537 26.4991C38.8537 23.2525 38.8537 20.0134 38.8537 16.7668C38.8537 16.6685 38.8537 16.5625 38.8537 16.4566C38.2317 16.4566 37.6476 16.4566 37.0332 16.4566C37.0332 16.6382 37.0332 16.7971 37.0332 16.956C37.0256 17.7355 36.5325 18.2274 35.7588 18.2426C35.3871 18.2501 35.023 18.2501 34.6513 18.2426C33.9079 18.2199 33.4149 17.7204 33.3997 16.9787C33.3921 16.8047 33.3997 16.623 33.3997 16.4414C28.9318 16.4414 24.5094 16.4414 20.0491 16.4414ZM37.0332 15.1927C37.7007 15.1927 38.3227 15.2079 38.9447 15.1852C39.2482 15.1776 39.4606 14.9127 39.4606 14.5797C39.4682 12.9829 39.4682 11.3861 39.4606 9.78172C39.4606 9.39576 39.2178 9.17629 38.831 9.15359C38.7551 9.15359 38.6793 9.15359 38.6034 9.15359C30.6765 9.15359 22.7572 9.15359 14.8303 9.15359C14.7468 9.15359 14.6558 9.15359 14.5724 9.15359C14.2234 9.17629 13.9807 9.39576 13.9731 9.75145C13.9655 11.371 13.9655 12.9829 13.9731 14.6024C13.9731 14.9581 14.2234 15.1852 14.6027 15.1927C15.1489 15.2003 15.7026 15.1927 16.2488 15.1927C16.2943 15.1927 16.3398 15.1776 16.4005 15.1624C16.4005 14.9884 16.4005 14.8295 16.4005 14.6705C16.4081 13.8759 16.9011 13.384 17.7052 13.3764C18.0541 13.3764 18.4031 13.3689 18.7596 13.3764C19.5333 13.3916 20.034 13.8911 20.0491 14.663C20.0491 14.8295 20.0491 14.996 20.0491 15.17C24.517 15.17 28.947 15.17 33.3921 15.17C33.3921 14.9581 33.3845 14.7689 33.3921 14.5797C33.4301 13.8986 33.9079 13.4067 34.5906 13.384C35.0078 13.3689 35.4251 13.3689 35.8423 13.384C36.5401 13.4143 37.0104 13.9138 37.0332 14.6176C37.0332 14.7992 37.0332 14.9808 37.0332 15.1927ZM32.1784 7.9276C32.1784 7.32217 32.186 6.74701 32.1784 6.16429C32.1709 5.11236 31.4123 4.31774 30.3579 4.31017C27.9305 4.29503 25.5032 4.29503 23.0758 4.31017C22.1579 4.31774 21.4145 4.9156 21.3008 5.80103C21.2173 6.49727 21.2856 7.20865 21.2856 7.92003C21.6725 7.92003 22.0517 7.92003 22.4613 7.92003C22.4613 7.3373 22.4538 6.76972 22.4613 6.20213C22.4689 5.77076 22.6889 5.52859 23.0985 5.52859C25.5032 5.52102 27.9154 5.52102 30.32 5.52859C30.7296 5.52859 30.9496 5.77076 30.9572 6.20213C30.9647 6.67133 30.9572 7.14811 30.9572 7.61731C30.9572 7.7157 30.9572 7.81408 30.9572 7.9276C31.3971 7.9276 31.7688 7.9276 32.1784 7.9276ZM23.7054 7.92003C25.7307 7.92003 27.7257 7.92003 29.7359 7.92003C29.7359 7.51893 29.7359 7.14054 29.7359 6.75458C27.7181 6.75458 25.7155 6.75458 23.7054 6.75458C23.7054 7.14811 23.7054 7.5265 23.7054 7.92003ZM18.8051 17.009C18.8051 16.1992 18.8051 15.4198 18.8051 14.6251C18.4031 14.6251 18.0238 14.6251 17.6369 14.6251C17.6369 15.4273 17.6369 16.2219 17.6369 17.009C18.039 17.009 18.4107 17.009 18.8051 17.009ZM34.6286 14.6176C34.6286 15.4273 34.6286 16.2068 34.6286 17.0014C35.0306 17.0014 35.4099 17.0014 35.8043 17.0014C35.8043 16.1992 35.8043 15.4122 35.8043 14.6176C35.4099 14.6176 35.0306 14.6176 34.6286 14.6176Z"
                            fill="#273240"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_67_722">
                            <rect
                              width="29.1892"
                              height="29.1513"
                              fill="white"
                              transform="translate(12.0996 1.24561)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      Service Provider
                    </span>
                  </button>
                )}
              </div>

              <FormButton
                BtnCaption="Get Started"
                handlesubmit={handlesubmit}
              />
            </div>
          </div>
        </div>

        <RightImage />
      </div>
    </div>
  );
};

export default UserSelection;