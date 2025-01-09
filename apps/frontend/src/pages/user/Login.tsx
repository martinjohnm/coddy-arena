
const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL ?? 'pooi';


export const Login = () => {
    const google = () => {
        window.open(`${BACKEND_URL}/auth/google`, '_self');
    };
    return <div className="flex flex-col items-center justify-center h-screen text-textMain bg-slate-500">
    <h1 className="text-4xl font-bold mb-8 text-center text-green-500 drop-shadow-lg">
      Login to Coddy
    </h1>
    <div className="bg-slate-700 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
      <div className="mb-8 md:mb-0 md:mr-8 justify-center flex flex-col">
        <div
          className="flex items-center shadow-2xl text-slate-400 hover:text-slate-900 justify-center px-4 py-2 rounded-md mb-4 cursor-pointer transition-colors hover:bg-slate-600 duration-300"
          onClick={google}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" alt="" className="w-6 h-6 mr-2" />
            Sign in with Google
        </div>
      </div>
      
    </div>
  </div>
}