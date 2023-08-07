import React from "react"
import { Link } from "react-router-dom"
function Terms() {
  return (
    <div>
      <p className="text-white text-center font-semibold text-2xl mt-3">
        <Link to="/" className="hover:text-zinc-700 active:bg-black">
          Go back to homepage
        </Link>
      </p>
      <br />
      <br />
      <p className="text-white  ">
        <ol>
          <li>
            Occasionally there may be information on this site that contains
            typographical errors, inaccuracies or omissions that may relate to
            product descriptions, pricing etc.
          </li>
          <li>
            I am not liable for any damages, losses, or claims arising from the
            use of this website, including any errors, interruptions, or
            viruses.
          </li>
          <li>
            Users are not allowed to reproduce, distribute, or use these
            contents without explicit permission
          </li>
          <li>
            You are prohibited from using the site or its content: (a) for any
            unlawful purpose; (b) to solicit others to perform or participate in
            any unlawful acts; (c) to violate any international, federal,
            provincial or state regulations, rules, laws, or local ordinances;
            (d) to infringe upon or violate our intellectual property rights or
            the intellectual property rights of others; (e) to harass, abuse,
            insult, harm, defame, slander, disparage, intimidate, or
            discriminate based on gender, sexual orientation, religion,
            ethnicity, race, age, national origin, or disability; (f) to submit
            false or misleading information; (g) to upload or transmit viruses
            or any other type of malicious code that will or may be used in any
            way that will affect the functionality or operation of the Service
            or of any related website, other websites, or the Internet; (h) to
            collect or track the personal information of others; (i) to spam,
            phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene
            or immoral purpose; or (k) to interfere with or circumvent the
            security features of the Service or any related website, other
            websites, or the Internet.
          </li>
          <li>
            The failure to exercise or enforce any right or provision of these
            Terms of Service shall not constitute a waiver of such right or
            provision.
          </li>
        </ol>
      </p>
    </div>
  )
}

export default Terms
