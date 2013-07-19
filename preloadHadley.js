var loader = new PxLoader({ 
  // how frequently we poll resources for progress 
  statusInterval: 5000, // every 5 seconds by default 
  // delay before logging since last progress change 
  loggingDelay: 20 * 1000, // log stragglers after 20 secs 
  // stop waiting if no progress has been made in the moving time window 
  noProgressTimeout: Infinity // do not stop waiting by default 
  }); 

var 

  //slide viewer
  imgElementV0 = loader.addImage('lvl.png','first');

  //slide 0,0
  imgElement99 = loader.addImage('trigger/gcsplash.gif','first');
	imgElement00 = loader.addImage('trigger/gcsplash.png','first');

  //slide 1,0
  imgElement10A = loader.addImage('trigger/gctankspin_horzn.gif','motion');
  imgElement10B = loader.addImage('trigger/gcworldspin_trans.gif','motion');
  imgElement10C = loader.addImage('trigger/gctankspin_eddy.gif','motion');
  imgElement10ABP = loader.addImage('trigger/gctankspin_horzn.jpg','proxy');
  //slide 2,0
  
  //slide 3,0
  //slide 3,1
  imgElement31A = loader.addImage('sprites/hadley_sprite.png','sprites');

  //slide 4,0
  imgElement40A = loader.addImage('trigger/hadley_mediumless.gif','motion');
  imgElement40AP = loader.addImage('trigger/hadley_mediumless.jpg','proxy');
  imgElement40B = loader.addImage('trigger/hadley_canless.gif','motion');
  imgElement40BP = loader.addImage('trigger/hadley_canless.jpg','proxy');
  imgElement40C = loader.addImage('static/hadley_1wind.png','still');
  imgElement40D = loader.addImage('static/hadley_1p5wind.png','still');
  imgElement40Z = loader.addImage('trigger/hadley_replay1.gif','motion');
  imgElement40ZU = loader.addImage('static/hadley_replay1bdrop.png','still');
  //slide 4,1
  imgElement41A = loader.addImage('trigger/hadley_contourside.gif','motion');
  imgElement41AP = loader.addImage('trigger/hadley_contourside.jpg','proxy');
  imgElement41B = loader.addImage('trigger/hadley_contourover.gif','motion');
  imgElement41BP = loader.addImage('trigger/hadley_contourover.jpg','proxy');
  imgElement41C = loader.addImage('static/hadley_rotoscope.png','still');
  imgElement41D = loader.addImage('trigger/hadley_inking.gif','motion');
  imgElement41DP = loader.addImage('trigger/hadley_inking.jpg','proxy');
   //slide 4,2
  imgElement42A = loader.addImage('trigger/hadley_fcontext.gif','motion');
  imgElement42AP = loader.addImage('trigger/hadley_fcontext.jpg','proxy');
  imgElement42B = loader.addImage('trigger/hadley_wcontext.gif','motion');
  imgElement42BP = loader.addImage('trigger/hadley_wcontext.jpg','proxy');


  //slide 5,0
  imgElement50A = loader.addImage('trigger/hadley_roamview.gif','motion');
  imgElement50AP = loader.addImage('trigger/hadley_roamview.jpg','proxy');

  //slide 6,0
  //slide 7,0
  //slide 8,0
  //slide 9,0
  //slide 10,0
  //slide 11,0
  //slide 12,0
  //slide 13,0
  //slide 14,0

  imgElementI01 = loader.addImage('image/H1B0.png','existent');
  imgElementI02 = loader.addImage('image/H2B0.png','existent');
  imgElementI03 = loader.addImage('image/H2B1.png','existent');
  imgElementI04 = loader.addImage('image/H2B2.png','existent');
  imgElementI05 = loader.addImage('image/H2B3.png','existent');
  imgElementI06 = loader.addImage('image/H2C0.png','existent');
  imgElementI07 = loader.addImage('image/H3B0.png','existent');
  imgElementI08 = loader.addImage('image/H3C0.png','existent');
  imgElementI09 = loader.addImage('image/hadley_1rpm.gif','existent');
  imgElementI10 = loader.addImage('image/hadley_40-1200_1000w.gif','existent');
  imgElementI11 = loader.addImage('image/hadley_bottomflows.png','existent');
  imgElementI12 = loader.addImage('image/hadley_domeproxy.gif','existent');
  imgElementI13 = loader.addImage('image/hadley_domezoom.png','existent');
  imgElementI14 = loader.addImage('image/hadley_greendye256_4sdelay.gif','existent');
  imgElementI15 = loader.addImage('image/hadley_key_perm.png','existent');
  imgElementI16 = loader.addImage('image/hadley_norotato.gif','existent');
  imgElementI17 = loader.addImage('image/hadley_particletracks.gif','existent');
  imgElementI18 = loader.addImage('image/hadley_pdrop.gif','existent');
  imgElementI19 = loader.addImage('image/hadley_perma256.gif','existent');
  imgElementI20 = loader.addImage('image/hadley_permdrifter.gif','existent');
  imgElementI21 = loader.addImage('image/hadley_permdrop.png','existent');
  imgElementI22 = loader.addImage('image/hadley_permlongterm.gif','existent');
  imgElementI23 = loader.addImage('image/hadley_proxy001.png','existent');
  imgElementI24 = loader.addImage('image/hadley_ptrackult.png','existent');
  imgElementI25 = loader.addImage('image/hadley_schematic.png','existent');
  imgElementI26 = loader.addImage('image/hadley_superprox.gif','existent');
  imgElementI27 = loader.addImage('image/hadley_topflows.png','existent');
  imgElementI28 = loader.addImage('image/hadley_top-level-ana.png','existent');
  imgElementI29 = loader.addImage('image/hadleydome_pattern.gif','existent');
  imgElementI30 = loader.addImage('image/wiat_experiment_swap.png','existent');
  imgElementI31 = loader.addImage('image/wiat_portal.png','existent');
  imgElementI32 = loader.addImage('image/wisp_wiggle.gif','existent');



loader.addProgressListener(function(e) { 
  console.log(e.resource.getName()); 
  document.getElementById('pcontented').innerHTML =
    '&nbsp;&nbsp;&nbsp;&nbsp;rsrc ' +
    (e.completedCount + ' / ' + e.totalCount);
}); 


loader.addCompletionListener(function(e) { 
  console.log('Ready to go!');
  document.getElementById('pheadliner').innerHTML = 
  "&nbsp;&nbsp;&nbsp;all ready!"
  document.getElementById('M2m').src='trigger/gcsplash.png';
}); 


loader.start(['first','still', 'motion', 'proxy', 'existent', 'sprites']);
