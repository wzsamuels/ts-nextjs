import {useState} from "react";
import AccountPage from "./index";

const emptyFields = {name: "", email: "", phone: "", url: "", keyword: "", competitor: ""}

export default function SeoCustomPage() {
  const [form, setForm] = useState(emptyFields)
  const [result, setResult] = useState()

  const handleFormUpdate = event => {
    const key = event.target.name
    let value = event.target.value

    setForm({...form, [key]: value})
  }

  const onSubmit = e => {
    e.preventDefault();
    const endpoint = "https://alcrku7ym1.execute-api.us-east-1.amazonaws.com/default/seo-form";

    const formData = JSON.stringify(form);
    console.log(formData)
    const body = formData

    const requestOptions = {
      method: "POST",
      body,
    };

    console.log(body)

    fetch(endpoint, requestOptions)
      .then((response) => {
        if (!response.ok) {
          console.log(response)
          throw new Error("Error in fetch");
        }
        return response.text();
      }).then(data => {
        //console.log(data.replace(/<script type="text\/javascript">.*?<\/script>/g, ""));
        //console.log(data)
        // Retrieve SEO Report URL from result
      console.log(data)
        const d1 = data.split("<div id=\"message\">").pop().split("</div>")[0];
        const d2 = d1.split('<a href="').pop().split('">here</a>')[0];
        const d3 = d2.split("report?url=")[1];
        console.log(d1)
        console.log(d2)
        console.log(d3)
        setResult(d3)
      })
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="header-largest my-8">What’s Your SEO Report Card Score?</h1>
      <div className="flex justify-center flex-col items-center max-w-[900px] w-full bg-darkerShade rounded">
        {result ?
          <div>
            <p>
              Thank you for submitting your website to our SEO Report Card tool! It will take about 10 min. to complete. You can see your report in progress:
              <br/>
              <a href={`http://twinsilverdesign.com/account/seo-report?url=${result}`}>http://twinsilverdesign.com/account/seo-report?url={result}</a>
            </p>
          </div>
          :
          <div>
            <h2 className="header-larger my-4">Get your website analyzed in minutes!</h2>
            <p><span className="text-red-500">*</span> required field</p>

            <form onSubmit={onSubmit} method='post' acceptCharset="UTF-8">
            <div className='flex w-full'>
              <div className="flex flex-col justify-center [&>*]:m-4 m-2 w-[45%]">
                <div className="flex items-center">
                  <label className="my-2" htmlFor="name">Name</label>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormUpdate}
                  />
                </div>

                <div className="flex items-center">
                  <label className="my-2" htmlFor="email_address">Email Address</label>
                  <input
                    className="input"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleFormUpdate}
                  />
                </div>

                <div className="flex items-center">
                  <label className="my-2"  htmlFor="phone">Phone Number</label>
                  <input
                    className="input"
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormUpdate}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center [&>*]:m-4 m-2 w-[45%]">
                <div className="flex items-center">
                  <label className="my-2"  htmlFor="url">Website</label>
                  <input
                    className="input"
                    type="text"
                    name="url"
                    value={form.url}
                    onChange={handleFormUpdate}
                  />
                </div>

                <div className="flex items-center">
                  <label className="my-2" htmlFor="keyword">Main Keyword</label>
                  <input
                    className="input"
                    type="text"
                    name="keyword"
                    value={form.keyword}
                    onChange={handleFormUpdate}
                    />
                </div>

                <div className="flex items-center">
                <label className="my-2"  htmlFor="competitor">Competitor Domain <small>(optional)</small></label>
                  <input
                    className="input"
                name="competitor"
                value={form.competitor}
                onChange={handleFormUpdate}
                />
                </div>
            </div>


            </div>
              <div className="flex items-center justify-center">
              <button className="" type="submit">Coming Soon!</button>
              </div>
            </form>
          </div>
        }
      </div>
      </div>
  )
}

AccountPage.auth = true