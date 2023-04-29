import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full h-fit section-bg-lg footer-text flex flex-col justify-center items-center">
        <div className="w-full h-1/2  flex flex-col">
          <div className="w-full h-1/2 py-12 bg-gray-300 flex flex-col justify-center items-center">
            <div className="flex flex-col space-y-2">
              <p className="footer-title text-center">お問合せ</p>
              <p className="text-center">
                お気軽にご連絡ください。
                <br />
                メールアドレス：datascienceleague117@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-1/2 flex flex-col">
          <div className="w-full h-5/6 py-4 bg-white flex flex-col lg:flex-row justify-center lg:items-start space-x-2">
            <div className="w-3/5 lg:w-3/5 mx-auto flex flex-col space-y-4 sm:space-y-0 sm:flex-row">
              <div className="sm:w-1/2 sm:h-4/5">
                <ul className="">
                  <li>データサイエンス特化型学生団体</li>
                  <li className="footer-title">Data Sciecne League</li>
                  <li>2022.4.25</li>
                  {/* <li>東京都千代田区大手町一丁目6番1号</li> */}
                  {/* <li>financial_data@fdua.org</li> */}
                </ul>
              </div>

              <div className="sm:w-1/2 sm:h-4/5">
                <p className="footer-title">Sitemap</p>
                <ul>
                  <li>
                    <Link href="/">ホーム</Link>
                  </li>
                  <li>
                    <Link href="/organization/about">団体概要</Link>
                  </li>
                  <li>
                    <Link href="/organization/members">運営メンバー</Link>
                  </li>
                  <li>
                    <Link href="/contacts/activities">活動内容</Link>
                  </li>
                  <li>
                    <Link href="/contacts/register">入会申請</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-white py-1 w-full h-1/6 bg-blue-900 flex justify-center items-center">
            <p>@Copyright DSL All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  )
}
