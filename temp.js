  var advising_commanding         = "advising commanding";
  var causative                   = "causative";
  var commanding                  = "commanding";
  var conjunctive                 = "conjunctive";
  var desire                      = "desire";
  var hypothetical                = "hypothetical";
  var impression                  = "impression";
  var negative_imperative         = "negative imperative";
  var others_desire               = "other's desire";
  var passive                     = "(ra)reru (passive/potential/honorific)";
  var past_hypothetical           = "past hypothetical";
  var past_presumptive            = "past presumptive";
  var past_tense                  = "past tense";
  var perfect                     = "perfect";
  var plain_negative              = "plain negative";
  var plain_negative_presumptive  = "plain negative presumptive";
  var plain_presumptive           = "plain presumptive";
  var polite                      = "polite";
  var polite_negative             = "polite negative";
  var polite_negative_presumptive = "polite negative presumptive";
  var polite_presumptive          = "polite presumptive";
  var predicative                 = "predicative";
  var pseudo_futurum              = "pseudo-futurum";
  var representative              = "representative";
  var short_potential             = "short potential";
  var simplified_te_ageru         = "simplified te-ageru";
  var simplified_te_iru           = "simplified te-iru";
  var simplified_te_oku           = "simplified te-oku";
  var simplified_te_oru           = "simplified te-oru";
  var te_aru                      = "te-aru";
  var te_form                     = "te-form";
  var te_iru                      = "te-iru";
  var te_oku                      = "te-oku";
  var te_oru                      = "te-oru";
  var way_of_doing                = "way-of-doing";

  // the irregular verbs suru and kuru must be checked separately
  var suruforms = {
    advising_commanding         : "せよ",
    causative                   : ["させる", "さす"],
    commanding                  : "しろ",
    conjunctive                 : "し",
    desire                      : "したい",
    hypothetical                : "すれば",
    impression                  : "しそう",
    negative_imperative         : "するな",
    others_desire               : "したがる",
    passive                     : ["される", "せられる"],
    past_hypothetical           : "したら",
    past_presumptive            : "したろう",
    past_tense                  : "した",
    perfect                     : "せず",
    plain_negative              : ["しない", "せん"],
    plain_negative_presumptive  : "するまい",
    plain_presumptive           : "するだろう",
    polite                      : "します",
    polite_negative             : "しません",
    polite_negative_presumptive : "しないだろう",
    polite_presumptive          : "するでしょう",
    predicative                 : "する",
    pseudo_futurum              : "しよう",
    representative              : "したり",
    short_potential             : "できる",
    simplified_te_ageru         : "したげる",
    simplified_te_iru           : "してる",
    simplified_te_oku           : "しとく",
    simplified_te_oru           : "しとる",
    te_aru                      : "してある",
    te_form                     : "して",
    te_iru                      : "している",
    te_oku                      : "しておく",
    te_oru                      : "しておる",
    way_of_doing                : "しかた"
  };

  var kuruforms = {
    advising_commanding : "こよ",
    causative           : "こさせる",
    commanding          : "こい",
    passive             : "こられる",
    perfect             : "こず",
    plain_negative      : "こない",
    plain_negative      : "こん",
    pseudo_futurum      : "こよう"
  };

  var ikuforms = {
    past_hypothetical   : "いったら",
    past_presumptive    : "いったろう",
    past_tense          : "いった",
    representative      : "いったり",
    simplified_te_ageru : "いったげる",
    simplified_te_iru   : "いってる",
    simplified_te_oku   : "いっとく",
    te_aru              : "いってある",
    te_form             : "いって",
    te_iru              : "いっている",
    te_oku              : "いっておく"
  };

  // rentaikei endings
  var verb_types           = ["v5u","v5k","v5g","v5s","v5t","v5m","v5b","v5n","v5r","v1"];
  var verb_endings         = ["う","く","ぐ","す","つ","む","ぶ","ぬ","る","る"];
  var illegal_verb_endings = ["っう","っく","っぐ","っす","っつ","っむ","っぶ","っぬ","っる","っる"];


  // the conjugations are ordered in such a way that when run in sequence they lead to proper deconstruction
  var conjugation_forms = {
        polite_negative_presumptive : ["わないだろう","かないだろう","がないだろう","さないだろう","たないだろう","まないだろう","ばないだろう","なないだろう","らないだろう","ないだろう"],
        polite_presumptive          : ["うでしょう","くでしょう","ぐでしょう","すでしょう","つでしょう","むでしょう","ぶでしょう","ぬでしょう","るでしょう","るでしょう"],
        polite_negative             : ["いません","きません","ぎません","しません","ちません","みません","びません","にません","りません","ません"],
        others_desire               : ["いたがる","きたがる","ぎたがる","したがる","ちたがる","みたがる","びたがる","にたがる","りたがる","たがる"],
        simplified_te_ageru         : ["ったげる","いたげる","いだげる","したげる","ったげる","んだげる","んだげる","んだげる","ったげる","たげる"],
        te_iru                      : ["っている","いている","いでいる","している","っている","んでいる","んでいる","んでいる","っている","ている"],
        te_aru                      : ["ってある","いてある","いである","してある","ってある","んである","んである","んである","ってある","てある"],
        te_oru                      : ["っておる","いておる","いでおる","しておる","っておる","んでおる","んでおる","んでおる","っておる","ておる"],
        te_oku                      : ["っておく","いておく","いでおく","しておく","っておく","んでおく","んでおく","んでおく","っておく","ておく"],
        plain_presumptive           : ["うだろう","くだろう","ぐだろう","すだろう","つだろう","むだろう","ぶだろう","ぬだろう","るだろう","るだろう"],
        past_presumptive            : ["ったろう","いたろう","いだろう","したろう","ったろう","んだろう","んだろう","んだろう","った","たろう"],
        passive                     : ["われる","かれる","がれる","される","たれる","まれる","ばれる","なれる","られる","られる"],
        causative                   : ["わせる","かせる","がせる","させる","たせる","ませる","ばせる","なせる","らせる","させる"],
        way_of_doing                : ["いかた","きかた","ぎかた","しかた","ちかた","みかた","びかた","にかた","りかた","かた"],
        plain_negative              : ["わない","かない","がない","さない","たない","まない","ばない","なない","らない","ない"],
        plain_negative_presumptive  : ["うまい","くまい","ぐまい","すまい","つまい","むまい","ぶまい","ぬまい","るまい","まい"],
        polite                      : ["います","きます","ぎます","します","ちます","みます","びます","にます","ります","ます"],
        desire                      : ["いたい","きたい","ぎたい","したい","ちたい","みたい","びたい","にたい","りたい","たい"],
        simplified_te_iru           : ["ってる","いてる","いでる","してる","ってる","んでる","んでる","んでる","ってる","てる"],
        past_hypothetical           : ["ったら","いたら","いだら","したら","ったら","んだら","んだら","んだら","ったら","たら"],
        representative              : ["ったり","いたり","いだり","したり","ったり","んだり","んだり","んだり","ったり","たり"],
        simplified_te_oru           : ["っとる","いとる","いどる","しとる","っとる","んどる","んどる","んどる","っとる","とる"],
        impression                  : ["いそう","きそう","ぎそう","しそう","ちそう","みそう","びそう","にそう","りそう","そう"],
        simplified_te_oku           : ["っとく","いとく","いどく","しとく","っとく","んどく","んどく","んどく","っとく","とく"],
        hypothetical                : ["えば","けば","げば","せば","てば","めば","べば","ねば","れば","れば"],
        perfect                     : ["わず","かず","がず","さず","たず","まず","ばず","なず","らず","ず"],
        plain_negative              : ["わん","かん","がん","さん","たん","まん","ばん","なん","らん","ん"],
        negative_imperative         : ["うな","くな","ぐな","すな","つな","むな","ぶな","ぬな","るな","るな"],
        past_tense                  : ["った","いた","いだ","した","った","んだ","んだ","んだ","った","た"],
        te_form                     : ["って","いて","いで","して","って","んで","んで","んで","って","て"],
        short_potential             : ["える","ける","げる","せる","てる","める","べる","ねる","れる",""],
        pseudo_futurum              : ["おう","こう","ごう","そう","とう","もう","ぼう","のう","ろう","よう"],
        commanding                  : ["え","け","げ","せ","て","め","べ","ね","れ","ろ"],
//      predicative                 : ["う","く","ぐ","す","つ","む","ぶ","ぬ","る","る"],
        conjunctive                 : ["い","き","ぎ","し","ち","み","び","に","り",""],
        advising_commanding         : ["","","","","","","","","","よ"]
      };

  function array_search(value, table) {
    var keys = Object.keys(table), form, val;
    for(var i=0, last=keys.length; i<last; i++)
      form = keys[i];
      val = table[form];
      if(typeof val === "string") {
        if(val == value) return form;
      }
      else if(val instanceOf Array) {
        if(val.indexOf(value) > -1) return form;
      }
    }
    return false;
  }

  // detect potential verbs
  function detectVerb(input) {
    var form,
        process = [{}],
        output = [];

    // special case: suru, return immediately
    form = array_search(input, suruforms);
    if (form) { return [{verb: "する", verbType: "vs-i", form: form}]; }

    // special case: kuru, return immediately
    form = array_search(input, kuruforms);
    if (form) { return [{verb: "くる", verbType: "vk", form: form}]; }

    // iteratively expand the term until there are no more verbs derivable from it
    while (process.length > 0) {
      results = dcvprocess(process);
      results.forEach(function(result) { output.push(result); }
      process = results;
    }

    // special case: iku, keep processing
    if (($key = array_search($input,$this->ikuforms))!==false) {
      $outarray["いく"]= array("v5k-s", $key);
    }

    // and then remove of $input from the list again
    $res = array();
    while(count($outarray)>0) {
      $key="";
      foreach($outarray as $verb=>$typeandform) { if($UTF8Functions->utf8_strlen($verb)>$UTF8Functions->utf8_strlen($key)) { $key = $verb; }}
      $res[$key] = $outarray[$key];
      unset($outarray[$key]);
    }

    return $res;
  }

  // get all matches for a complete comparison run
  function dcvprocess($list)
  {
    $output = array();
    foreach($list as $word => $typeandform) {
      $possibles = $this->deconstruct($word,$typeandform);
      foreach($possibles as $verb=>$typeandform) {
        if (!in_array($verb,$output)) { $output[$verb] = $typeandform; }}}
    return $output;
  }

  // match and set-expand
  function deconstruct(word, typeandform)
  {
    var output = [];
    var len = word.length;
    foreach($this->conjugation_forms as $formkey=>$form) {
      for ($s=0;$s<count($form);$s++) {
        $suffix = $form[$s];
        $slen = $UTF8Functions->utf8_strlen($suffix);
        $wsuffix = $UTF8Functions->utf8_substr($word, ($wlen-$slen), $slen);
        if ($suffix != "" && $wsuffix == $suffix) {
          $ed_type = array($this->verb_endings[$s], $this->verb_types[$s]);
          $nword = $UTF8Functions->utf8_substr($word, 0, ($wlen-$slen)) . $ed_type[0];
          $nwend = $UTF8Functions->utf8_substr($nword, ($wlen-$slen)-1, 2);
          if ($UTF8Functions->utf8_strlen($nwend)!=1 && !in_array($nwend,$this->illegal_verb_endings) && !in_array($nword,$output)) {
            $output[$nword]=array($ed_type[1],($typeandform[1]=="unknown") ? $formkey : $formkey.", ".$typeandform[1]);
          }
        }
      }
    }
    return $output;
  }