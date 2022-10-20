import Script from "next/script";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import styled from "styled-components";
import Flex from "../../components/atoms/Flex";
import AccountPage from "./index";

export default function SeoPage() {
  const divRef = useRef();
  const [firstUpdate, setFirstUpdate] = useState(true);
  useEffect(() => {

    const htmlString2 = `
    <script>
  embedConfig = {
    embedCode: '6cba125319972d37ee7f31d98265628ebb4fe501',
    output: true,
    orientation: 'landscape',
    frameStyle: {
      border: '0px',
      height: '660px',
      color: "white"
    }
  }
</script>
<script src="//app.optimizedmarketing.co/javascripts/embed_report_card.js"></script>
    `
    const fragment = document.createRange().createContextualFragment(htmlString2);
    divRef.current.append(fragment);

    console.log("componentDidUpdateFunction");

  }, []);

  useLayoutEffect(() => {
    let frame = document.getElementsByTagName('iframe')[0];
    console.log(frame);
   // var innerDoc = frame?.contentDocument || frame?.contentWindow.document;
   // console.log(innerDoc)
//    let doc = frame.contentDocument;
  }, [])

  useEffect(() => {
    if(!firstUpdate) {
      const el = document.getElementById('col_form')?.classList.add("text-green")
      console.log(el)
    }
  }, [firstUpdate])

  return (
    <Flex className="justify-center w-full flex-wrap bg-white" ref={divRef}>
    </Flex>
  )
}

AccountPage.auth = true