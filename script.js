


function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

data = {
"products":[
    {"sno":"101","name":"Black Forest","qty":"50","price":"450","image":"https://lh3.googleusercontent.com/2SWPxNh7b78X-Twx_-DsXqoMFi7xlMwjtUKHrbaQrWmOIntRwV6n3rMd30yurPbbIlXd8UAv1E4teoCrMTC1-zuO1Ej-bsm54N80pb2o3wM9J1imBaEC70Otbi72MtD5tZ3GuDENsA=w2400"},
    {"sno":"102","name":"White Forest","qty":"28","price":"550","image":"https://lh3.googleusercontent.com/nTxjCcy9oDS7Kl8Fvaav15iiE76hqKlqoCWC0KpeIPaNRFaj5bQnwMIgImXK_RAZi3JBFGQox4T1CImdrltLrLRXjj8OGq0ZBocHr1qTMbo7neMIrTgOl_6ypU9WvzoasIN0p4Lnxg=w2400"},
    {"sno":"103","name":"Walnut Cake","qty":"75","price":"250","image":"https://lh3.googleusercontent.com/BJi9fP7Ks63qabScjIpWKo-wfREPVtfXUEC6zThRW1kBN0g8csCbdPGoNgTTs0WcuV-ofUCTcrXeDxORjkOH4o3W7iCouH_S2jD89T-bm__INY1HHeoY7D4Is7EQNQKqDcS1Kd-_wg=w2400"},
    {"sno":"104","name":"Chocolate Mousse","qty":"63","price":"300","image":"https://lh3.googleusercontent.com/au4pv0eczUxoGl3Rvn0yO_39K_Pcbtm40U1NdPtqh81NtNDimtxhpyRcDsVWKi_onRWiTjfj1PgVlLpkN9-Ey0fS0CIVfMHIUHZ4TqTxaDnjvtFamK4rFF6itfT5DaPRVuTe_6hTyw=w2400"},
    {"sno":"105","name":"Strawberry Cheesecake","qty":"32","price":"700","image":"https://lh3.googleusercontent.com/XDAqYnI0vNDxfyOi_87uHRy1T1ioGMel-xBpzs715SbRMWN7ibtLIo-JDtSaHz4A4USNUnXVoGBexbUpYK6UT4zgNI3WWwv6EFw4rwB05nHHLzYfVh7_QtNnDdbA99tl1VYKVZ9_Lg=w2400"},
    {"sno":"106","name":"Red Velvet","qty":"15","price":"630","image":"https://lh3.googleusercontent.com/ciU9nNcoB9TJ7IYa2pueuBJybblHIVCkRz1HDWtPp5DCNdl2NUMIVHUI4qpzDjU4KgiptfSbTFs3_XVxSH8w4eOZqMnFUADeE0exkT9jrbTiZhYzdpvemzzoUEVMj6SZLAwI-7LhSA=w2400"},
    {"sno":"107","name":"Fudge Cake","qty":"42","price":"500","image":"https://lh3.googleusercontent.com/NMmmh_cwXX6o_BYiRdELNbYdw3EVYCmKdyQQedPTrRRovVbokBU0azBVDPUDf2sRA2KojRGOm0ghDuIyj7_epcrkLq8g3_8GoaVe_i6xUyiHEZdraFY61aqVzIv-aJyW33TQb66kRg=w2400"},
    {"sno":"108","name":"Cookies","qty":"150","price":"150","image":"https://lh3.googleusercontent.com/S9k_ywAmNm8QMi2pHNPY31slYtNXESNq_Lue04uchS3cF4f5OxV4ncmNJGXiffMww0PyI9uhpD_laHBWrd7oOEsPFUkDibwmBrkkNDmDwG3mxhq5M0COxGnon78S98QsCQWLYZei7A=w2400"},
    {"sno":"109","name":"Glazed Donuts","qty":"94","price":"200","image":"https://lh3.googleusercontent.com/ux4MmP2aGBGjS35JybVw3nL-Xya7tlMQlM4--9sFrwHsWjgYFyfdOiLbqX80BO5TdbGAI_prcuG_OnFUZX7IOQAkGF4oyjwXEVk9ll_Y-_UoUd--x66BdK0a1firbouxoNV1CsfY4w=w2400"},
    {"sno":"110","name":"Chocolate Truffle Cake","qty":"20","price":"400","image":"https://lh3.googleusercontent.com/6BVjQVkQJjaxezBdVdUbCCi_zleFTU-8i4qTeeMBln2gXSwuTvjbzaRL6cAs3Cizg_R9kklBMRS11qeQfJ7oj8LCwo2L8TviqNPMziSFESrUAPnUr7fU--TnrZQHNYXw5CX1NBTa4A=w2400"},
    {"sno":"111","name":"Cream Puff","qty":"55","price":"300","image":"https://lh3.googleusercontent.com/eqdTqHeMLLwyckJP94cxJZumjeewhZiFAuuLgMAQQhyU4GsMBaVKj6lScOknjMyqT5jKrrcnx_JFkIH-jjdcI94BDI790uyc0tsL2FV-tRNOOLxc1eii5iOS2Xh5tQDZ9AdIeqizjA=w2400"},
    {"sno":"112","name":"Apple Pie","qty":"20","price":"400","image":"https://lh3.googleusercontent.com/yGKeyAH1U-Xv1dPuvX4QEJT4IDTWnLWBryibqM0Z7nVIkfhDHa9ZMB0vO8mes8f00hjlWcPNlMZ_KY9YejcihL8u_lQXzEhZC9LzqMnWUX-18GyXVQSQSz1AastooKehUh5XQLuxHw=w2400"}
]
}
