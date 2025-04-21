
const cards_container = document.getElementById("cards-container");
urls = [
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G1-Poster_%D8%B1%D8%A8%D8%A7%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/AFFFF3B8-89B3-40E1-AF3B-5BAD53150FA8_%D8%B7%D9%8A%D9%81%20%D8%B2%D9%8A%D8%AF%20%D8%A7%D9%84%20%D8%A8%D9%88%D8%B9%D9%84%D9%8A%D8%A7%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G18%20-%20%20poster_%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AA%D9%88%D9%8A%D8%AC%D8%B1%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/University%20Research%20Poster_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%B3%D9%84%D9%85%D8%A7%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/IMG_7098_%D8%B1%D9%8A%D8%AD%D8%A7%D9%86%D9%87%20%D8%A7%D9%84%D8%B9%D8%A8%D9%88%D8%AF%D9%8A.jpeg",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G15-Neamah-Poster_%D9%85%D9%8A%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AE%D9%85%D9%8A%D8%B3.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Updated%20Poster_%D8%B1%D9%8A%D9%85%D8%A7%D9%86%20%D8%A7%D9%84%D8%AD%D8%A8%D9%8A%D8%A8.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20Poster%20-%20G2_%D8%AC%D9%88%D8%AF%20%D8%A7%D9%84%D8%B1%D8%A8%D8%AF%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Final%20poster%20TrustHealth_%D8%AA%D8%B1%D9%83%D9%8A%20%D8%A7%D9%84%D8%AB%D9%86%D9%8A%D8%A7%D9%86.png",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster_%D9%86%D8%AF%D9%8A%D8%B1%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.jpg",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Parent%20note%20.pdf_%D9%86%D8%AF%D9%8A%D8%B1%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/QuRide%20poster_%D8%B1%D9%8A%D9%85%D8%A7%20%D8%A7%D9%84%D8%AE%D8%B2%D9%8A%D9%85.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/IT_G8__%D9%87%D9%84%D8%A7%20%D8%A7%D9%84%D8%B3%D8%AF%D9%8A%D8%B3.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20poster_%D8%AF%D8%A7%D9%86%D8%A9%20%D8%A7%D9%84%D9%83%D9%81%D9%8A%D9%84.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/461-F-P7_%D8%AE%D8%B2%D8%A7%D9%85%D9%8A%20%D8%A7%D9%84%D9%86%D8%B5%D9%8A%D8%A7%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Zahaa%20Poster_%D8%AD%D9%86%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%88%D9%8A%D9%82%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/%E2%80%8E%E2%81%A82%D9%88%D9%81%D8%B1%D8%A9%E2%81%A9_%D8%AA%D8%A7%D9%84%D8%A7%20%D8%A7%D9%84%D8%B1%D8%B4%D9%88%D8%AF%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Graduation%20project%20poster1_%D8%B1%D8%BA%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D9%82.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G4_Poster_%D8%B3%D8%AF%D9%8A%D9%85%20%D8%A7%D9%84%D8%B1%D8%B3%D9%8A%D9%86%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G-20_%D8%AC%D9%87%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%AD.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Online%20Health%20Hub%20Poster%20(for%20digital%20use)_%D9%81%D9%87%D8%AF%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20Poster_%D8%B1%D9%8A%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%20Top%20Doctor_%D8%AD%D9%83%D9%8A%D9%85%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20Poster_%D8%B9%D9%87%D8%AF%20%D8%A7%D9%84%D8%B9%D8%B6%D9%8A%D9%84%D9%87%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/So%27orat_Poster_G5_%D8%A7%D9%84%D8%B9%D9%86%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D9%8A%D8%AC%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Detection%20of%20Fake%20Profiles%20in%20Online%20Social%20N_%D8%B1%D9%86%D9%8A%D9%85%20%D8%A7%D9%84%D8%B1%D8%B4%D9%88%D8%AF%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G1%20-%20Poster_%D8%A7%D9%84%D8%B9%D9%86%D9%88%D8%AF%20%D8%A7%D9%84%D8%AD%D8%B5%D8%A7%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/So%27orat%20Poster_%D9%84%D9%8A%D8%A7%D9%86%20%D8%A7%D9%84%D8%B3%D9%84%D9%88%D9%85.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Missing%20people%20App%20poster_%D8%AE%D8%AF%D9%8A%D8%AC%D9%87%20%D9%82%D8%A7%D9%8A%D8%AF%20%D9%85%D8%AD%D9%85%D8%AF.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/CARRY%20IT_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%A7%D9%84%D9%85%D8%B7%D8%B1%D9%88%D8%AF%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%20-%20Event%20Planning%20App_%D9%87%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D8%B1%D9%8A%D9%86%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%202_%D8%B3%D9%85%D9%89%20%D8%B5%D8%A7%D9%84%D8%AD%20%D8%A7%D9%84%D8%B3%D9%88%D9%8A%D9%84.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Parent%20note%20.pdf_%D9%86%D8%AF%D9%8A%D8%B1%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Taqdeer_Group8.pdf_%D9%8A%D8%B2%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B1%D9%85%D8%B6%D9%89.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/%E2%80%8E%E2%81%A82%D9%88%D9%81%D8%B1%D8%A9%E2%81%A9_%D8%AA%D8%A7%D9%84%D8%A7%20%D8%A7%D9%84%D8%B1%D8%B4%D9%88%D8%AF%D9%8A%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/IMG_5807_%D8%A8%D8%AF%D8%B1%20%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D9%83.png",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G6-461%20Poster_%D8%B9%D9%85%D8%B1%20%D8%A7%D9%84%D9%86%D9%85%D9%84%D9%87.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/AI-Driven%20Realtime%20Haram%20Crowd%20Detection%20and_%D8%A8%D8%AF%D8%B1%20%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D9%83.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster_%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85%20%D8%A7%D9%84%D9%85%D8%B4%D9%8A%D9%82%D8%AD.png",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/PERSONALIZED%20SKINCARE%20GUIDE%20APP%20Poster_%D9%84%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D8%AF%D8%BA%D9%8A%D9%85.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Skin_Cancer_Poster_V4_%D9%84%D9%85%D9%89%20%D8%A7%D9%84%D9%87%D8%AC%D9%84%D9%87%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Zahaa%20Poster_%D8%AD%D9%86%D9%8A%D9%86%20%D8%A7%D9%84%D8%B4%D9%88%D9%8A%D9%82%D9%8A%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Darb%20.pdf_%D8%B3%D8%AC%D9%89%20%D8%A7%D9%84%D8%BA%D9%81%D9%8A%D9%84%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/71F7D7A4-C305-4655-9AF0-E87AC3DE5103_%D8%B1%D9%8A%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B4%D9%85%D8%B1%D9%8A.jpeg",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/71F7D7A4-C305-4655-9AF0-E87AC3DE5103_%D8%B1%D9%8A%D8%A7%D9%86%20%D8%A7%D9%84%D9%85%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B4%D9%85%D8%B1%D9%8A%201.jpeg",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G15-Neamah-Poster_%D9%85%D9%8A%D9%84%D8%A7%D9%81%20%D8%A7%D9%84%D8%AE%D9%85%D9%8A%D8%B3%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Graduation%20Project%20(SecureJoin)%20Poster_%D9%81%D9%8A%20%D8%A7%D9%84%D8%B1%D8%B4%D9%8A%D8%AF.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Online%20Health%20Hub%20Poster%20(for%20digital%20use)_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D8%A7%D9%84%D9%84%D8%AD%D9%8A%D8%AF%D8%A7%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86%20%D8%A7%D9%84%D8%B9%D9%82%D9%8A%D9%84.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Moneer%20Poster_%D8%B1%D8%BA%D8%AF%20%D8%A7%D9%84%D8%B3%D8%AD%D9%8A%D8%A8%D8%A7%D9%86%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%20Top%20Doctor_%D8%AD%D9%83%D9%8A%D9%85%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Generative%20Arabic%20Calligraphy%20Through%20Image-t_%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D9%85%D9%82%D9%8A%D8%AF.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%20Top%20Doctor_%D8%AD%D9%83%D9%8A%D9%85%D9%87%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A%202.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/SmartLabs_%D8%A7%D9%84%D9%87%D8%A7%D9%85%20%D8%A7%D9%84%D8%B5%D9%88%D9%8A%D8%A7%D9%86.png",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster%20-%20Event%20Planning%20App_%D9%87%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%B9%D9%85%D9%8A%D8%B1%D9%8A%D9%86%D9%8A%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G9POSTER_%D8%B1%D9%8A%D9%81%20%D8%A7%D9%84%D8%AE%D8%B6%D9%8A%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/IT_G8_-2_%D9%87%D9%84%D8%A7%20%D8%A7%D9%84%D8%B3%D8%AF%D9%8A%D8%B3.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Graduation%20project%20poster_%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%AD%D8%A8%D9%8A%D8%A8.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20poster_%D8%AF%D8%A7%D9%86%D8%A9%20%D8%A7%D9%84%D9%83%D9%81%D9%8A%D9%84%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/FYP-Poster_%D9%8A%D8%B2%D9%8A%D8%AF%20%D8%A7%D9%84%D9%88%D9%87%D9%8A%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G-20_%D8%AC%D9%87%D8%A7%D8%AF%20%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%AD%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G14%20Poster.pdf_%D9%84%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D9%85%D8%B7%D9%8A%D8%B1%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/POSTER%20.pdf%204_%D8%AF%D8%A7%D9%86%D8%A7%20%D8%A7%D9%84%D8%AF%D8%B9%D9%8A%D8%AC%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP%20Poster_%D8%B1%D9%8A%D9%85%D8%A7%20%D8%A7%D9%84%D9%86%D8%A7%D8%B5%D8%B1%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/poster_%D9%85%D8%B9%D8%A7%D8%B0%20%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D8%B3%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Blind-Aid-Reading-Glasses_Poster_%D8%A7%D8%B3%D8%A7%D9%85%D9%87%20%D8%A7%D9%84%D9%82%D8%B1%D8%B9%D8%A7%D9%88%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/PROJECTLY%20Project%20Management%20Website%20(2)_%D8%A3%D8%B3%D9%85%D8%A7%D8%A1%20%D8%B9%D9%84%D9%8A%20%D8%A7%D9%84%D8%AC%D8%B1%D8%A8%D9%88%D8%B9.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Graduation%20project%20poster1_%D8%B1%D8%BA%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D9%82%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/AssilaPoster_%D8%B4%D8%AF%D9%86%20%D8%A7%D9%84%D8%B9%D9%85%D8%B1.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/islamic%20fatwa%20assistance%20system_%D9%85%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D8%A8%D9%8A%D8%B6%D8%A7%D9%86%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/poster_%D8%B9%D9%85%D8%B1%20%D8%A7%D9%84%D9%86%D8%B5%D8%A7%D8%B1.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Poster_%D8%AC%D9%88%D8%AF%20%D8%A7%D9%84%D8%A8%D9%84%D9%8A%D9%87%D8%AF.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/SafeHouse%20Poster_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%A8%D9%86%20%D8%AD%D8%B3%D9%8A%D9%86.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Mobile%20MACS_%D9%86%D9%88%D8%B1%D9%87%20%D8%A7%D9%84%D9%82%D9%88%D9%8A%D9%81%D9%84%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/GP-Poster_%D9%84%D9%8A%D9%86%D8%A7%20%D8%A7%D9%84%D8%B1%D8%A8%D8%B9.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/oad-poster_%D8%B4%D8%B0%D8%A7%20%D8%B4%D8%AC%D8%A7%D8%B9%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A7%D8%A8%D9%8A%20%D8%A7%D9%84%D8%AD.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/IMG-20250417-WA0013_%D8%AC%D9%87%D8%A7%D8%AF%20%D8%A7%D9%84%D9%85%D8%AD%D8%B3%D9%86.jpg",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/ICCIT-2025%20poster-project%20expo%20template(AI-Po_%D9%83%D8%A7%D8%AF%D9%8A%20%D8%A7%D9%84%D8%B9%D9%88%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Gaze%20Analytics%20Utilizing%20AI%20for%20Early%20Detecti_%D8%A7%D9%84%D9%87%D9%86%D9%88%D9%81%20%D8%A7%D9%84%D9%81%D8%B6%D9%84.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/FYP%20Drone_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D9%84%D8%AE%D8%B6%D9%8A%D8%B1.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/PREDICT-2_%D8%A7%D8%AD%D9%85%D8%AF%20%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%B1.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Dayjour%20(40%20x%2055%20%D8%B3%D9%85)_%D8%B1%D9%81%D9%8A%D9%81%20%D8%A7%D9%84%D8%B3%D8%AD%D9%8A%D8%A8%D8%A7%D9%86%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/G6-461%20Poster_%D8%B9%D9%85%D8%B1%20%D8%A7%D9%84%D9%86%D9%85%D9%84%D9%87%201.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Child%20Insight%20Poster.pdf_%D9%85%D9%87%D8%A7%20%D9%87%D8%B1%D8%B3%D8%A7%D9%86%20%D8%A7%D9%84%D8%B3%D8%A8%D9%8A%D8%B9%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/suspicious%20Activity%20Tracking%20AI%20Camera%20poster_%D8%B1%D8%A7%D8%B4%D8%AF%20%D8%A7%D9%84%D8%B9%D9%82%D9%84.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Final%20Poster._%D8%B9%D9%85%D8%B1%D9%88%20%D8%A7%D9%84%D8%B7%D9%88%D8%A7%D8%B4%D9%8A.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Mujeeb(AutoRescue)-Poster_PDF_Standard_%D8%B9%D9%87%D9%88%D8%AF%20%D8%A7%D8%A8%D9%86%20%D8%A7%D9%84%D8%B4%D9%8A%D8%AE.pdf",
    "https://quedusa-my.sharepoint.com/personal/432111217_qu_edu_sa/Documents/Apps/Microsoft%20Forms/%D9%86%D9%85%D9%88%D8%B0%D8%AC%20%D8%BA%D9%8A%D8%B1%20%D9%85%D8%B9%D9%86%D9%88%D9%86/%D8%A7%D9%84%D8%B3%D8%A4%D8%A7%D9%84/Graduation%20Project%20Poster%20-%20Planistry_%D9%81%D8%A7%D8%B1%D8%B3%20%D8%A7%D9%84%D8%AF%D8%B1%D9%8A%D8%A8%D9%89.pdf"
]

for (let i = 0; i  < urls.length; i++) {
    const element = urls[i];
    Decoded_url = decodeURIComponent(element)
    console.log("the decoded URL: ",Decoded_url.slice(Decoded_url.lastIndexOf('/') + 1));
}

let projects = [
    {
        "ID": "12345",
        "Start time": "2025‑04‑21T10:00:00",
        "Completion time": "2025‑04‑21T12:00:00",
        "Email": "student@example.com",
        "Name": "Project Team Alpha",
        "Last modified time": "2025‑04‑21T12:30:00",
      
        "Campus": "Main Campus",
        "Section": "Male",
        "Department": "Computer Science",
      
        "Project Title": "AI‑Powered Crop‑Yield Prediction",
        "Student Names with IDs": [
          { "name": "Ahmed Al‑Fahad", "id": "201812345" },
          { "name": "Sara Al‑Saud",  "id": "201866789" }
        ],
        "Supervisor Name": "Dr. Khalid Al‑Mutairi",
        "Full Project Description": "A machine‑learning system that forecasts crop yields from satellite imagery and weather data.",
        "Project Field":[ "Artificial Intelligence", "data analysis"],
      
        "Project Poster": "/assets/G1-Poster_ربا الحربي_page-0001.jpg",
        "Additional Project Images": [
          "https://example.com/images/field‑1.jpg",
          "https://example.com/images/field‑2.jpg"
        ],
        "Project Link": "https://example.com/demo/crop‑yield",
        "Contact Methods": {
          "phone": "+966‑555‑123456",
          "email": "teamalpha@qu.edu.sa",
          "linkedin": "https://www.linkedin.com/in/team‑alpha"
        }
      }
]

const tpl    = document.getElementById('card-tpl');
const parent = document.getElementById('card-container');
for (let i = 0; i < 7; i++) {
    projects.forEach(p => {
        const card = tpl.content.cloneNode(true);
      
        /* fill title + section -------------------------------------------------- */
        card.querySelector('#card-title').textContent = p["Project Title"];
        card.querySelector('#card-dept').textContent  = p["Department"];
      
        /* robust tag handling --------------------------------------------------- */
        const raw   = p["Project Field"] ?? "";                       // may be array or string
        const tags  = Array.isArray(raw)
                        ? raw
                        : raw.split(',').map(t => t.trim()).filter(Boolean);
      
        const tagBox = card.querySelector('#card-tags');
        tags.forEach(tag => tagBox.insertAdjacentHTML(
          'beforeend',
          `<span class="bg-black/90 text-white text-xs font-semibold px-2 py-0.5 rounded">${tag}</span>`
        ));
      
        /* poster image ---------------------------------------------------------- */
        const img = card.querySelector('#card-image');
        img.src = p["Project Poster"];
        img.alt = p["Project Title"];
      
        parent.appendChild(card);                                     // add to page
      });
}

