import React from "react";

function Card({username}){
    console.log(username);
    
    return (
        <>
        <div className="flex font-sans bg-slate-50 rounded-xl ">
  <div className="flex-none w-48 relative">
    <img src="https://imgs.search.brave.com/8T9nXxmXLhwLWBfAy9Lq7Tsb8KcZXzeRzj27SVDoPGo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFCcEZjcTVJYUwu/anBn" alt="" className="absolute inset-0 w-full h-full object-cover bg-aqua rounded-xl " loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className=" text-lg font-semibold text-slate-900">
   {username}
      </h1>
      <div className="text-lg font-semibold text-slate-500 flex-auto">
        $110.00
      </div>
      <div className="flex-auto w-full flex-none text-sm font-medium text-slate-700 mt-2">
        In stock
      </div>
    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div className="space-x-2 flex text-sm">
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xs" checked />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XS
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="s" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            S
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="m" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            M
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="l" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            L
          </div>
        </label>
        <label>
          <input className="sr-only peer" name="size" type="radio" value="xl" />
          <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
            XL
          </div>
        </label>
      </div>
    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-50" type="button">
          Add to bag
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300  border border-slate-200 bg-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
<br />

<div class="bg-white border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
  <div class="flex items-center space-x-4">
    <img src="https://imgs.search.brave.com/ppoPCFvn1hwlXDv1C0FJ8r63b_qN7YvXhL49NQLfc5Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5j/YXN0Ym94LmZtL2Nh/Lzg0L2U0L2Y3Mzc1/ZjA1MWI1OGVlZTJj/YWE0Y2E5NjM5Njcy/ZjI2M2Rfc2NhbGVk/X3YxXzQwMC5qcGc" alt="" width="88" height="88" class="flex-none rounded-lg bg-slate-100" loading="lazy" />
    <div class="min-w-0 flex-auto space-y-1 font-semibold">
      <p class="text-cyan-500 dark:text-cyan-400 text-sm leading-6">
        <abbr title="Episode">Ep.</abbr> 128
      </p>
      <h2 class="text-slate-500 dark:text-slate-400 text-sm leading-6 truncate">
        Scaling CSS at Heroku with Utility Classes
      </h2>
      <p class="text-slate-900 dark:text-slate-50 text-lg">
        Full Stack Radio
      </p>
    </div>
  </div>
  <div class="space-y-2">
    <div class="relative">
      <div class="bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
        <div class="bg-cyan-500 dark:bg-cyan-400 w-1/2 h-2" role="progressbar" aria-label="music progress" aria-valuenow="1456" aria-valuemin="0" aria-valuemax="4550"></div>
      </div>
      <div class="ring-cyan-500 dark:ring-cyan-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
        <div class="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full ring-1 ring-inset ring-slate-900/5"></div>
      </div>
    </div>
    <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
      <div class="text-cyan-500 dark:text-slate-100">24:16</div>
      <div class="text-slate-500 dark:text-slate-400">75:50</div>
    </div>
  </div>
</div>
<div class="bg-slate-50 text-slate-500 dark:bg-slate-600 dark:text-slate-200 rounded-b-xl flex items-center">
  <div class="flex-auto flex items-center justify-evenly">
    <button type="button" aria-label="Add to favorites">
      <svg width="24" height="24">
        <path d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Previous">
      <svg width="24" height="24" fill="none">
        <path d="m10 12 8-6v12l-8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" aria-label="Rewind 10 seconds">
      <svg width="24" height="24" fill="none">
        <path d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5 5v3.111c0 .491.398.889.889.889H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </div>
  <button type="button" class="bg-white text-slate-900 dark:bg-slate-100 dark:text-slate-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center" aria-label="Pause">
    <svg width="30" height="32" fill="currentColor">
      <rect x="6" y="4" width="4" height="24" rx="2" />
      <rect x="20" y="4" width="4" height="24" rx="2" />
    </svg>
  </button>
  <div class="flex-auto flex items-center justify-evenly">
    <button type="button" aria-label="Skip 10 seconds">
      <svg width="24" height="24" fill="none">
        <path d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 5v3.111c0 .491-.398.889-.889.889H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" class="hidden sm:block lg:hidden xl:block" aria-label="Next">
      <svg width="24" height="24" fill="none">
        <path d="M14 12 6 6v12l8-6Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M18 6v12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
    <button type="button" class="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-slate-500 text-slate-500 dark:text-slate-100 dark:ring-0 dark:bg-slate-500">
      1x
    </button>
  </div>
</div>
<br />




</>

    )
}

export default Card