export default function Home () {
  return (
    <div>
      <nav className="bg-gray-800 border-gray-700 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Flowbite</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-600 rounded md:bg-transparent md:text-blue-500 md:p-0 dark:text-white md:dark:text-blue-400" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-gray-300 md:dark:hover:text-blue-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      <main className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">第一週</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第1章：課程介紹與環境準備（30分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>1.1 課程目標與學習內容概述 - 介紹課程整體目標與預期學習成果</li>
              <li>
                <a href="https://www.notion.so/1-2-11dad1e3133680fcb71ce224a03b52dd?pvs=21" className="text-blue-600 hover:underline dark:text-blue-400">1.2 開發環境搭建</a>
              </li>
              <li>
                <a href="https://www.notion.so/1-3-Git-GitHub-11dad1e313368030b3c9ef1ea38dcc16?pvs=21" className="text-blue-600 hover:underline dark:text-blue-400">1.3 Git 與 GitHub 帳戶註冊</a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第2章：初識 Next.js（60分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>2.1 什麼是 Next.js - 特點與優勢、與 React 的關係</li>
              <li>2.2 創建第一個 Next.js 應用 - 使用 `create-next-app` 創建項目</li>
              <li>2.3 運行和調試 Next.js 應用 - 啟動本地開發伺服器，熱加載功能介紹</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第3章：GitHub 基礎與項目協作（60分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>3.1 Git 基礎命令 - `git init`、`git add`、`git commit` 等基本操作</li>
              <li>3.2 將項目推送到 GitHub - 創建新的 GitHub 倉庫，關聯遠程倉庫並推送程式碼</li>
              <li>3.3 Fork 與 Pull Request 流程 - 如何 Fork 他人github，將 Fork 後的倉庫克隆到本地，提交程式碼並創建 Pull Request</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第4章：協作開發實踐（30分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>4.1 分支管理 - 創建與切換分支，分支策略介紹</li>
              <li>4.2 程式碼合併與衝突解決 - 合併分支的方法，常見衝突的解決方案</li>
            </ul>
          </div>
        </section>


        <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">第二週</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第5章：深入 Next.js 開發（60分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>5.1 頁面與路由 - 創建頁面組件，動態路由與嵌套路由</li>
              <li>5.2 組件與樣式 - 使用 CSS 模組和 Styled JSX</li>
              <li>5.3 資料獲取與渲染 - 使用 `getStaticProps` 和 `getServerSideProps`</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">第6章：部署到 Vercel（45分鐘）</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>6.1 什麼是 Vercel - 特點與優勢</li>
              <li>6.2 註冊 Vercel 帳戶並連接 GitHub</li>
              <li>6.3 一鍵部署 Next.js 應用 - 部署設定與自訂網域</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
