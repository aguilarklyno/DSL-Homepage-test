import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='w-full section-bg-lg footer-text flex flex-col justify-center items-center'>
        <div className='w-full h-1/2 flex flex-col'>
          <div className='w-full h-1/2 flex justify-center items-center'>
            <Link
              className='w-1/2 h-full bg-yellow-400 flex flex-col justify-center items-center'
              href="/contacts/register"
              >
              <div
                className='w-3/5 h-4/5 flex flex-col justify-center items-start space-y-2 sm:space-y-4'
              >
                <p className='flex items-start sm:items-end flex-col sm:flex-row'>
                  <span className='footer-title xl:text-4xl sm:mr-2'>
                    Join us 
                  </span>
                  入会申込 →
                </p>
                <p>
                  FDUAは金融データへのご入会はこちらから
                </p>
              </div>
            </Link>
            <Link 
              className='w-1/2 h-full bg-yellow-200 flex flex-col justify-center items-center'
              href="/contacts/faq"
            >
              <div className='w-3/5 h-4/5 flex flex-col justify-center items-start space-y-2 sm:space-y-4'>
                <p className='flex items-start sm:items-end flex-col sm:flex-row'>
                  <span className='footer-title xl:text-4xl sm:mr-2'>
                    FAQ
                  </span>
                  よくある質問 →
                </p>
                <p>
                  FDUAに寄せられたよくある質問をご案内いたします。
                </p>
              </div>
            </Link>
          </div>
          <div className='w-full h-1/2 bg-gray-300 flex flex-col justify-center items-center'>
            <div className='flex flex-col space-y-2'>
              <p className='footer-title text-center'>
                お問合せ
              </p>
              <p className='text-center'>
                一般社団法人 金融データ活用推進協会までお気軽にご連絡ください。<br/>
                メールアドレス：financial_data@fdua.org
              </p>
            </div>
          </div>
        </div>
        <div className='w-full h-1/2 flex flex-col'>
          <div className='w-full h-5/6 bg-white flex justify-center items-center space-x-2'>
            <div className='w-1/4 h-4/5'>
              <ul className=''>
                <li>一般社団法人</li>
                <li className='footer-title'>金融データ活用推進協会</li>
                <li>2022.4.25</li>
                <li>東京都千代田区大手町一丁目6番1号</li>
                <li>financial_data@fdua.org</li>
              </ul>
            </div>
            <div className='w-1/4 h-4/5'>
              <p className='footer-title'>
                Sitemap
              </p>
              <ul>
                <li>
                  <Link href="/">
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link href="/overview/organization">
                    理事・委員会
                  </Link>
                </li>
                <li>
                  <Link href="/overview/members">
                    会員
                  </Link>
                </li>
                <li>
                  <Link href="/contacts/activities">
                    活動内容
                  </Link>
                </li>
                <li>
                  <Link href="/contacts/register">
                    入会申請
                  </Link>
                </li>
                <li>
                  <Link href="/contacts/faq">
                    よくある質問
                  </Link>
                </li>
                <li>
                  <Link href="/contacts/form">
                    お問合せフォーム
                  </Link>
                </li>
                <li>プライバシーポリシー</li>
              </ul>
            </div>
            <div className='w-1/4 h-4/5'>
              <p className='footer-title'>
                Official SNS
              </p>
              <p>
                SNSを登録してFDUAの最新情報をGET!!
              </p>
            </div>
          </div>
          <div className='w-full h-1/6 bg-yellow-200 flex justify-center items-center'>
            <p>
              @Copyright FDUA All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
