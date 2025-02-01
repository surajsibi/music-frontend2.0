import React, { useState, useEffect } from 'react';

const Lyrics = () => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    // Simulate fetching lyrics from an API
    const apiResponse =
      "Kuch rishton ka namak hi doori hota hai<br>Na milna bhi bahut zaroori hota hai<br><br>Dum-dum, dum-dum<br>Tu mera dum-dum, dum-dum<br>Mera har dum-dum, dum-dum<br>Tu mera dum-dum, dum-dum<br>Mera har dum-dum, dum-dum<br>Dum-dum, dum-dum, dum-dum<br>Dum-dum, dum-dum, dum-dum<br><br>Tu baat kare ya na mujhse<br>Chahe aankhon ka paigaam na le<br>Par yeh mat kehna, arey, oh, pagle<br>\"Mujhe dekh na tu, mera naam na le\"<br><br>Tujhse mera deen-dharam hai, mujhse teri khudaai<br>Tujhse mera deen-dharam hai, mujhse teri khudaai<br>Tu bole toh ban jaaun main Bulleh Shah saudaai<br><br>Main bhi naachoon...<br>Main bhi naachoon, manaun sohne yaar ko<br>Chaloon main teri raah, Bulleya<br>Main bhi naachoon, rijhaun sohne yaar ko<br>Karoon na parwaah, Bulleya<br><br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum tu<br><br>Mera mehram tu, marham tu<br>Mera dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum tu<br><br>Maana, apna ishq adhoora<br>Dil na ispe sharminda hai<br>Poora hoke khatam hua sab<br>Jo hai aadha woh hi zinda hai<br><br>Ho, bethi rehti hain ummeedein<br>Tere ghar ki dehleezon pe<br>Jiski na parwaaz khatam ho<br>Dil yeh mera wahi parinda hai<br><br>Bakhshe tu jo pyaar se mujhko toh ho meri rihaai<br>Bakhshe tu jo pyaar se mujhko toh ho meri rihaai<br>Tu bole toh ban jaaun main Bulleh Shah saudaai<br><br>Main bhi naachoon...<br>Main bhi naachoon, manaun sohne yaar ko<br>Chaloon main teri raah, Bulleya<br>Main bhi naachoon, rijhaun sohne yaar ko<br>Karoon na parwaah, Bulleya<br><br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum tu<br><br>Tu yaad kare ya na mujhko<br>Mere jeene mein andaaz tera<br>Sar aankhon par hai teri naraazi<br>Meri haar mein hai koi raaz tera<br><br>Shayad meri jaan ka sadqa maange teri judaai<br>Shayad meri jaan ka sadqa maange teri judaai<br>Tu bole toh ban jaaun main Bulleh Shah saudaai<br><br>Main bhi naachoon...<br>Main bhi naachoon, manaun sohne yaar ko<br>Chaloon main teri raah, Bulleya<br>Main bhi naachoon, rijhaun sohne yaar ko<br>Karoon na parwaah, Bulleya<br><br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum tu<br><br>Mera mehram tu, marham tu<br>Mera dum-dum, har dum tu<br>Mera har dum-dum, har dum tu<br>Mera har dum tu<br><br>Kuch rishton ka namak hi doori hota hai<br>Na milna bhi bahut zaroori hota hai";

    // Replace `<br>` with `<br />` to make it JSX-compatible
    const processedLyrics = apiResponse.replaceAll('<br>', '<br/>');
    setLyrics(processedLyrics);
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div dangerouslySetInnerHTML={{ __html: lyrics }} />
  );
};

export default Lyrics;
