import React, { Fragment } from "react";
import styles from "../styles/cityscape.module.less";

const BostonCityScape = () => (
  <Fragment>
    <div className="arc"></div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 998.579 556.321">
      <path
        id="citgofill"
        className={styles.citgofill}
        d="M620.738,83.586c-1.362-4.951-8.008-13.108-14.083-19.183-1.2-1.2-2.223-1.462-3.443-.438l0,0a15.025,15.025,0,0,0-1.835,3.707c-3.426,4.122-8.8,10.1-10.408,15.33-2.573,8.335,4.751,4.755,11.216,3.956,2.146.39,4.31-.085,6.447-.331C611.52,87.078,622.662,90.178,620.738,83.586ZM607.283,70.191l.041-.127c.135.157.27.314.406.469C607.584,70.415,607.435,70.3,607.283,70.191Z"
      />
      <path
        id="waterbase"
        className={styles.waterbase}
        d="M886.158,253.649a.545.545,0,0,0,.145-.4c.03-.086-.431-.162-1.349-.229-38.317-6.271-171.77,1.874-195.278.6l-236.112.055c-27.481.623-295.053-1.256-310.718,2.933,8.046-2.152-79.582.059-76.362,11.4a1.692,1.692,0,0,0-.117.492c-1.225,6.722,13.174,28,17.389,32.469,2.842,10.666,7.551,16.486,14.354,25.2l-.912-1.234c11,14.26,24.033,25.6,38.569,36l-3.576-2.8c46.922,36.634,123.76,62.135,182.574,70.13,70.2,9.544,138.918,15.372,209.823,15.63,27.159.1,54.129-1.844,81.261-1.991,40.8-.22,74.551-14.055,112.409-27.71,54.38-19.614,120.129-32.647,143.936-92.725C868.866,315.03,894.837,249.545,886.158,253.649Z"
      />
      <path
        id="watermid"
        className={styles.watermid}
        d="M453.564,253.683c-27.481.623-295.053-1.256-310.718,2.933,8.046-2.152-79.582.059-76.362,11.4-12.33,30.045,56.072,50.9,64.123,59.421q-.23-.238-.456-.479a17.272,17.272,0,0,0,8.682,5.488c4.994,23.318,21.443,24.146,36.465,29.018,25.834,35.367,90.129,37.312,123.4,42.906l-.367-.067c93.06,16.68,191.605-.235,283.992-11.633,56.913,12.632,124.572,11.245,181.419-2.567,35.128-8.534,100.7-34.67,110.619-85.484,8.12-9.808,13.555-36.053,11.945-51.364-36.439-6.7-172.838,1.66-196.627.374Z"
      />
      <path
        id="watertop"
        className={styles.watertop}
        d="M886.3,253.254c.03-.086-.431-.162-1.349-.229-38.317-6.271-171.77,1.874-195.278.6l-236.112.055c-27.481.623-295.053-1.256-310.718,2.933,8.046-2.152-79.582.059-76.362,11.4a1.6,1.6,0,0,0-.017,1.224c.048,7.446,3.3,16.877,5.919,23.631,6.647,17.149,20.348,36.187,33.2,48.918,29.244,28.979,89.3,41.525,128.862,45.8l0,.015c.156.024.319.048.475.066a3.077,3.077,0,0,0-.471-.1c47.484,6.576,83.484.945,127.261-18.554l-.465.165c32.514-13.387,63.314,4.926,94.906,12.788,30.1,7.491,63.525,6.191,94.442,7.252,54.6,1.874,112.165,7.288,166.31-3.742,44.787-9.124,84.3-9.944,115.477-47.652,14.688-17.766,45.714-61.455,53.782-84.175A.545.545,0,0,0,886.3,253.254Z"
      />
      <g id="buildingshadow" className={styles.buildingshadow}>
        <path d="M81.621,259.142c-3.893,2.2-3.23,19.526.66,21.879,3.907,2.364,13.309,1.575,18.4,1.981,8.825.7,17.066,1.332,25.557,3.154l-2.175-.462c22.581,5.14,44.208,14.078,63.375,23.583,9.526,4.723,18.774,9.685,28.618,14.058,11.326,5.031,18.855,10.1,25.113,18.19q-.7-.9-1.389-1.795.363.481.733.962l-.081-.1c5.36,6.98,7.027,19.362,22.184,17.638,6.638-.755,9.242-3.446,12.069-7.192,3.279-4.345,5.429-5.72,10.666-9.182.428,11.174,1.086,22.4,2.063,33.55.771,8.783,3.261,17.907,2.781,26.7a4.769,4.769,0,0,0-.5,4.11c-.794,8.187,12.191,7.5,19.794,7.2,7.915-.316,16.916,1.185,24.537-1.023a38.986,38.986,0,0,0,8.674-.67c4.928.86,11.131-.119,14.611-2.919,4.091-3.291,2.546-7.79,2.365-11.734-.455-9.945-1.1-19.773-1.952-29.69,1.077-.048,2.155-.086,3.233-.127.212,5.942.152,13.247,5.725,18.132-.616,5.934,8.374,12.414,15.746,14.453,10.048,2.778,17.259-3.036,19.34-9.5,3.648-2.734,7.877-6.281,9.945-9.7,9.41-.73,18.832-1.532,28.267-1.969,3.552,8,18.688,6.18,27.619,5.147l-.234.026c5.558-.615,12.074-1.015,16.335-3.928,6.373-4.356,4.118-12.814,3.887-18.289A236.057,236.057,0,0,0,481.9,319.4a26,26,0,0,0,5.015,1.512c-.606,5.362-1.848,10.652,3.972,14.747-.189,16.632,43.756,17.195,52.143,4.278,9.39-3.01,7.97-11.981,7.794-17.914,2.779,3.077,8.238,4.509,13.262,4.712a8.637,8.637,0,0,0,.7,4.052c1.708,3.384,7.287,5.5,12.291,5.563.731,4.128,6.568,6.616,12.2,6.763,1.1,7.631,2,15.5.734,23.185-1.7,10.347,6.411,13.379,20.571,12.867,6.764-.245,16.257-.3,21.522-3.774,8.058-5.321,4.754-16.946,3.218-23.533l.059.225a44.485,44.485,0,0,1-.95-5.44c2.563-.339,4.962-.521,7.547-.692,1.164,5.074,9.214,7.914,16.055,7.581.44,12.2,3.329,24.4,22.292,28.654,27.56,6.184,24.589-14.887,25.041-26.761a19.688,19.688,0,0,0,3.724-.267c.278,5.074,3.692,9.144,11.4,10.054,2.085,7.107,2.567,15.373,16.546,14.831,13.254-.514,19.848-6.941,19.548-15.488,11.117-1.644,25.424-.261,35.762-3.408,14.384-4.377,8.142-17.7,7.38-25.928a26.407,26.407,0,0,0,5.087-1.178c5.31-.034,11.444-1.1,14.665-4.4,8.681-.579,15.7-7.724,17.853-13.237,2.587-6.636-3.486-13.734-.636-20.075,2.158-2.326,3.767-4.2,6.886-5.73,4.573-2.24,9.279-2.933,11.994-6.639,3.794-5.179-4.365-27.573-5.707-33.052L600.73,252.953s-225.925.826-258.273.826S140.276,253.572,81.621,259.142ZM214.756,290.4l-.12-.12q4.715.312,9.429.623c.779,3.681,5.57,7.855,8.044,11.163,3.441,4.6,6.835,9.218,10.236,13.833q-1.53-.855-3.115-1.66C230.874,306.376,222.786,298.423,214.756,290.4Zm59.665,11.277c-5.84,6.408-10.288,13.288-15.964,19.744q-.937-1.266-1.874-2.531c5.1-8.424,9.461-17.079,16.6-24.84l.175.011A45.291,45.291,0,0,1,274.421,301.675Zm-37.883-9.963q12.556.813,25.115,1.615c-4.56,5.4-7.978,11.145-11.464,16.89C245.653,304.043,241.047,297.9,236.538,291.712Zm27.019,41.024.246.318h0Zm-1.433-2.552a2.456,2.456,0,0,0,.856-1.074c5.622-4.259,8.952-9.736,12.831-14.769a27.958,27.958,0,0,0,1.936,5.557c-1.848,4.621-6.743,8.1-11.183,11.643l1.582-1.27a40.06,40.06,0,0,1-4.258,2.735C263.282,332.071,262.723,331.122,262.124,330.184Zm-73.981-40.727q-1.4-.577-2.8-1.154,7.882.526,15.762,1.068c.792,3.493,8.668,8.992,11.532,11.872C204.6,297.233,196.677,292.97,188.143,289.457Zm83.522-13.9a5.352,5.352,0,0,0-.7,2.887q-13.4-.836-26.791-1.706C253.327,276.162,262.494,275.849,271.665,275.553Z" />
      </g>
      <path
        id="boat1"
        className={styles.boat1}
        d="M554.345,326.644c-3.2-.121-6.436-.266-9.636-.1a.649.649,0,0,0-.154-.237c-.461-1.594-.567-3.268-1.169-4.817-.621-1.6-1.47-3.065-2.046-4.688-.593-1.672-1.038-3.383-1.791-4.98-.7-1.477-1.342-2.949-1.93-4.486-1.261-3.292-2.635-6.475-4.121-9.648a16.628,16.628,0,0,0-2.691-4.17c-.482-.534-1.181-1.566-1.874-1.761a1.033,1.033,0,0,0-1.234,1.111c-2.038,2.9-4.48,5.384-6.651,8.155s-4.592,5.27-6.566,8.225-4.048,5.792-5.925,8.833a23.713,23.713,0,0,1-3.112,4.379,19.669,19.669,0,0,0-2.856,2.849q-1.777-.183-3.551-.392c-.906-.107-2.253-.453-2.991.316-1.466,1.528,1.08,4.73,1.91,5.947l0,0c.053.076.105.152.157.229l-.051-.077c.554.793,1.182,1.523,1.671,2.371s.821,2.163,1.691,2.623a6.737,6.737,0,0,0,2.887.226c1.069.012,2.138.01,3.207.01,4.242,0,8.467.083,12.706.191s8.506.175,12.758.268c4.2.091,8.411.1,12.61-.124a5.665,5.665,0,0,0,3.015-.573,9.869,9.869,0,0,0,2.134-2.029,11.882,11.882,0,0,0,1.45-2.631,19.1,19.1,0,0,1,.819-1.833c.286-.5.6-.568.969-.947.626.022,1.251-.128,1.35-.967A1.1,1.1,0,0,0,554.345,326.644ZM531.073,297.41c1.234,2.24,2.253,4.707,3.288,7.07,1.074,2.451,1.823,5.064,2.973,7.476,1.143,2.4,1.786,4.975,2.843,7.41a34.389,34.389,0,0,1,1.582,3.589c.372,1.219.514,2.512.814,3.752a116.663,116.663,0,0,1-13.614.3c.136-5.01.449-10.069.98-15.045-.007.04-.012.079-.017.119a45.6,45.6,0,0,0,.313-8.311c-.155-2.815-.54-5.59-.645-8.414A11.847,11.847,0,0,1,531.073,297.41Zm-24.8,27.2c2.164-1.893,3.582-4.681,5.142-7.163,1.465-2.331,3.082-4.5,4.608-6.78,3.442-5.137,7.817-9.427,11.6-14.218.033,1.032.085,2.06.207,3.085-.006-.046-.012-.091-.019-.138.269,2.351.474,4.7.512,7.076.037,2.286-.316,4.493-.5,6.759-.374,4.589-.655,9.17-.877,13.771-3.653,0-7.262-.378-10.9-.69s-7.264-.464-10.894-.775C505.533,325.234,505.911,324.935,506.276,324.612Zm44.46,5.252a10.2,10.2,0,0,1-2.638,4.1c-1.173,1.02-2.981.7-4.409.8-3.286.227-6.639.067-9.929.012-6.695-.113-13.395-.475-20.09-.476-3.757,0-7.6.272-11.349-.039a29.274,29.274,0,0,0-2.126-3.541,18.6,18.6,0,0,1-2.3-3.664c3.425.268,6.855.672,10.277,1,3.464.333,6.948.335,10.411.7a145.632,145.632,0,0,0,21.26.423c1.829-.076,3.644-.366,5.474-.419,1.961-.055,3.932,0,5.893.041A10.6,10.6,0,0,0,550.736,329.864Z"
      />
      <path
        id="boat2"
        className={styles.boat2}
        d="M605.97,320.417s1.57,1.581,1.9,1.349c3.892-.033,7.739-.26,11.636-.116,3.805.141,7.528-.227,11.321-.446,3.867-.223,7.748.035,11.612-.209a43.979,43.979,0,0,0,5.429-.782c1.007-.191,2.014-.384,3.018-.6.755-.159,2.008-.149,2.214-1.088.744-.577,1.439-1.2,2.13-1.841a8.374,8.374,0,0,0,1.917-1.905.979.979,0,0,0,.76-.943c0-1.334-1.69-.96-2.506-.922-1.373.064-2.744.128-4.118.145a1,1,0,0,0-.781-.866c-1.082-1.558-1.7-3.421-2.782-5-1.136-1.656-2.4-3.266-3.625-4.855l.156.2a91.772,91.772,0,0,1-5.6-9.345c-.961-1.663-2.134-3.162-3.007-4.887-.512-1.009-1.448-3.984-3-3.569-1.272.34-2.009,2.742-2.556,3.78-.887,1.686-1.715,3.392-2.659,5.049-1.791,3.146-3.444,6.367-5.252,9.5-2.179,3.78-4.358,7.566-6.628,11.292-2.412,0-4.826.013-7.236-.091-.964-.042-5.778-.9-5.137,1.149-.26.8.67,1.766,1.06,2.4Zm29.3-28.712c.573.91,1.241,1.765,1.773,2.7s.958,1.941,1.485,2.885a60.427,60.427,0,0,0,3.278,5.283c1.177,1.674,2.446,3.287,3.68,4.919,1.321,1.747,2.085,3.786,3.232,5.629-4.594.11-9.2.518-13.786.776,0-4.22.028-8.441-.021-12.66a87.489,87.489,0,0,0-1.206-12.353A29.37,29.37,0,0,0,635.266,291.705Zm-17.125,22.231C623,306,627.472,297.808,631.8,289.58a86.277,86.277,0,0,1,1.109,12.218c.041,4.061.016,8.122.016,12.183-2.51.066-5.01.246-7.518.36s-5.026.037-7.535.037C617.964,314.231,618.052,314.082,618.141,313.936Z"
      />
      <path
        id="boat3"
        className={styles.boat3}
        d="M685.975,355.756s1.569,2.16,1.9,1.843c3.892-.044,3.739-.355,7.636-.158a87.178,87.178,0,0,0,11.321-.609c3.867-.306,7.748.047,11.612-.286a33.149,33.149,0,0,0,5.429-1.068c1.007-.262,2.015-.525,3.018-.813.755-.217,2.008-.2,2.214-1.487.744-.788,1.439-1.644,2.131-2.516a10.473,10.473,0,0,0,1.916-2.6,1.311,1.311,0,0,0,.76-1.289c0-1.822-1.689-1.311-2.5-1.259-1.374.087-2.744.175-4.119.2a1.287,1.287,0,0,0-.781-1.183c-1.082-2.129-1.7-4.674-2.782-6.827-1.136-2.264-2.4-4.463-3.625-6.634.05.091.1.187.156.277-2.191-4-3.776-8.462-5.6-12.768-.961-2.272-2.134-4.32-3.007-6.676-.511-1.38-1.448-5.444-3-4.877-1.272.465-2.009,3.747-2.556,5.165-.887,2.3-1.715,4.634-2.659,6.9-1.79,4.3-3.444,8.7-5.251,12.982-2.18,5.165-4.359,10.337-6.629,15.428a25.734,25.734,0,0,1-3.236-.125c-.964-.056-5.778-1.227-5.137,1.57-.26,1.088.671,2.414,1.06,3.277Zm25.3-39.228c.572,1.243,1.24,2.411,1.772,3.688s.958,2.652,1.485,3.943c.993,2.435,2.1,4.935,3.278,7.217s2.446,4.491,3.68,6.721c1.321,2.387,2.085,5.173,3.233,7.69-4.6.151-9.2.709-13.787,1.061,0-5.765.029-11.533-.021-17.3a162.148,162.148,0,0,0-1.2-16.877Q710.408,314.657,711.271,316.528ZM694.146,346.9c4.853-10.843,9.33-22.036,13.661-33.277a160.055,160.055,0,0,1,1.109,16.694c.041,5.548.016,11.1.016,16.645-2.51.091-5.01.336-7.517.491s-5.027.051-7.536.051C693.968,347.305,694.056,347.1,694.146,346.9Z"
      />
      <img
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkXref="https://ladiesthatuxboston.com/bostonbuildings.svg"
        x="0"
        y="0"
        width="100%"
        height="100%"
      />
    </svg>
  </Fragment>
);

export default BostonCityScape;