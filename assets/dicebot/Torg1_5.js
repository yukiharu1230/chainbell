/* Generated by Opal 1.0.3 */
Opal.modules["diceBot/Torg"] = function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$gsub', '$last_match', '$torg_check', '$=~', '$debug', '$to_i', '$parren_killer', '$torg_dice', '$get_torg_bonus', '$>', '$+', '$to_s', '$!=', '$roll', '$shift', '$empty?', '$==', '$upcase', '$===', '$get_torg_success_level', '$get_torg_interaction_result_intimidate_test', '$get_torg_interaction_result_taunt_trick', '$get_torg_interaction_result_maneuver', '$get_torg_damage_ords', '$get_torg_damage_posibility', '$get_torg_bonus_text', '$get_torg_table_result', '$each', '$[]', '$get_torg_damage', '$<', '$-', '$length', '$<=', '$/', '$split', '$join', '$getTorgBonusOutputTextWhenModDefined']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Torg');

    var $nesting = [self].concat($parent_nesting), $Torg_initialize$1, $Torg_changeText$2, $Torg_dice_command_xRn$4, $Torg_torg_check$5, $Torg_torg_dice$6, $Torg_rollDiceCommand$7, $Torg_get_torg_success_level$8, $Torg_get_torg_interaction_result_intimidate_test$9, $Torg_get_torg_interaction_result_taunt_trick$10, $Torg_get_torg_interaction_result_maneuver$11, $Torg_get_torg_table_result$12, $Torg_get_torg_damage_ords$14, $Torg_get_torg_damage_posibility$15, $Torg_get_torg_damage$16, $Torg_get_torg_bonus_text$17, $Torg_getTorgBonusOutputTextWhenModDefined$18, $Torg_get_torg_bonus$19;

    
    Opal.const_set($nesting[0], 'ID', "TORG");
    Opal.const_set($nesting[0], 'NAME', "?????????");
    Opal.const_set($nesting[0], 'SORT_KEY', "?????????");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "????????????(TGm)\n" + "???TORG????????????????????????????????????\n" + "???\"TG(???????????????)\"????????????????????????R????????????????????????????????????\n" + "????????????????????????????????????20??????????????????????????????????????????????????????????????????\n" + "???????????????\"(???????????????)(??????)\"??????????????????\n" + "????????????????????? ??????????????????RTx or RESULTx???\n" + "????????????/?????? ????????????????????????ITx or INTIMIDATEx or TESTx???\n" + "????????????/???????????? ????????????????????????TTx or TAUNTx or TRICKx or CTx???\n" + "??????????????? ????????????????????????MTx or MANEUVERx???\n" + "????????????????????????????????????????????????ODTx or ORDSx or ODAMAGEx???\n" + "???????????????????????????????????????????????????DTx or DAMAGEx???\n" + "????????????????????????BTx+y or BONUSx+y or TOTALx+y??? x?????????, y??????????????????\n");
    self.$setPrefixes(["(TG.*|RT.*|Result.*|IT.*|Initimidate.*|TT.*|Taunt.*|Trick.*|CT.*|MT.*|Maneuver.*|ODT.*|ords.*|odamage.*|DT.*|damage.*|BT.*|bonus.*|total.*)"]);
    
    Opal.def(self, '$initialize', $Torg_initialize$1 = function $$initialize() {
      var $iter = $Torg_initialize$1.$$p, $yield = $iter || nil, self = this, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) $Torg_initialize$1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      
      $send(self, Opal.find_super_dispatcher(self, 'initialize', $Torg_initialize$1, false), $zuper, $iter);
      return (self.sendMode = 2);
    }, $Torg_initialize$1.$$arity = 0);
    
    Opal.def(self, '$changeText', $Torg_changeText$2 = function $$changeText(string) {
      var $$3, self = this;

      
      string = string.$gsub(/Result/i, "RT");
      string = string.$gsub(/(Intimidate|Test)/i, "IT");
      string = string.$gsub(/(Taunt|Trick|CT)/i, "TT");
      string = string.$gsub(/Maneuver/i, "MT");
      string = string.$gsub(/(ords|odamage)/i, "ODT");
      string = string.$gsub(/damage/i, "DT");
      string = string.$gsub(/(bonus|total)/i, "BT");
      string = $send(string, 'gsub', [/TG(\d+)/i], ($$3 = function(){var self = $$3.$$s || this;

      return "" + "1R20+" + ($$($nesting, 'Regexp').$last_match(1))}, $$3.$$s = self, $$3.$$arity = 0, $$3));
      string = string.$gsub(/TG/i, "1R20");
      return string;
    }, $Torg_changeText$2.$$arity = 1);
    
    Opal.def(self, '$dice_command_xRn', $Torg_dice_command_xRn$4 = function $$dice_command_xRn(string, nick_e) {
      var self = this;

      return self.$torg_check(string, nick_e)
    }, $Torg_dice_command_xRn$4.$$arity = 2);
    
    Opal.def(self, '$torg_check', $Torg_torg_check$5 = function $$torg_check(string, nick_e) {
      var $a, $b, self = this, output = nil, mod = nil, skilled = nil, unskilled = nil, dice_str = nil, sk_bonus = nil;

      
      output = "1";
      if ($truthy(/(^|\s)S?(1R20([+-]\d+)*)(\s|$)/i['$=~'](string))) {
      } else {
        return "1"
      };
      string = $$($nesting, 'Regexp').$last_match(2);
      mod = $$($nesting, 'Regexp').$last_match(3);
      self.$debug(mod);
      if ($truthy(mod)) {
        mod = self.$parren_killer("" + "(0" + (mod) + ")").$to_i()};
      self.$debug(mod);
      mod = mod.$to_i();
      $b = self.$torg_dice(), $a = Opal.to_ary($b), (skilled = ($a[0] == null ? nil : $a[0])), (unskilled = ($a[1] == null ? nil : $a[1])), (dice_str = ($a[2] == null ? nil : $a[2])), $b;
      sk_bonus = self.$get_torg_bonus(skilled);
      if ($truthy(mod)) {
        if ($truthy($rb_gt(mod, 0))) {
          output = "" + (sk_bonus) + "[" + (dice_str) + "]+" + (mod)
        } else {
          output = "" + (sk_bonus) + "[" + (dice_str) + "]" + (mod)
        }
      } else {
        output = "" + (sk_bonus) + "[" + (dice_str) + "]"
      };
      output = $rb_plus(output, $rb_plus(" ??? ", $rb_plus(sk_bonus, mod).$to_s()));
      if ($truthy(skilled['$!='](unskilled))) {
        output = $rb_plus(output, $rb_plus($rb_plus("(?????????", $rb_plus(self.$get_torg_bonus(unskilled), mod).$to_s()), ")"))};
      output = "" + (nick_e) + ": (" + (string) + ") ??? " + (output);
      return output;
    }, $Torg_torg_check$5.$$arity = 2);
    
    Opal.def(self, '$torg_dice', $Torg_torg_dice$6 = function $$torg_dice() {
      var $a, self = this, isSkilledCritical = nil, isCritical = nil, skilled = nil, unskilled = nil, dice_str = nil, dummy = nil, dice_n = nil;

      
      isSkilledCritical = true;
      isCritical = true;
      skilled = 0;
      unskilled = 0;
      dice_str = "";
      while ($truthy(isSkilledCritical)) {
        
        dummy = self.$roll(1, 20, 0);
        dice_n = dummy.$shift();
        skilled = $rb_plus(skilled, dice_n);
        if ($truthy(isCritical)) {
          unskilled = $rb_plus(unskilled, dice_n)};
        if ($truthy(dice_str['$empty?']())) {
        } else {
          dice_str = $rb_plus(dice_str, ",")
        };
        dice_str = $rb_plus(dice_str, dice_n.$to_s());
        if (dice_n['$=='](20)) {
          isCritical = false
        } else if ($truthy(dice_n['$!='](10))) {
          
          isSkilledCritical = false;
          isCritical = false;};
      };
      return [skilled, unskilled, dice_str];
    }, $Torg_torg_dice$6.$$arity = 0);
    
    Opal.def(self, '$rollDiceCommand', $Torg_rollDiceCommand$7 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, string = nil, output = nil, ttype = nil, value = nil, type = nil, num = nil, $case = nil;

      
      string = command.$upcase();
      output = "1";
      ttype = "";
      value = 0;
      if ($truthy(/([RITMDB]T)(\d+([\+\-]\d+)*)/i['$=~'](string))) {
      } else {
        return "1"
      };
      type = $$($nesting, 'Regexp').$last_match(1);
      num = $$($nesting, 'Regexp').$last_match(2);
      $case = type;
      if ("RT"['$===']($case)) {
      value = self.$parren_killer("" + "(0" + (num) + ")").$to_i();
      output = self.$get_torg_success_level(value);
      ttype = "????????????";}
      else if ("IT"['$===']($case)) {
      value = self.$parren_killer("" + "(0" + (num) + ")").$to_i();
      output = self.$get_torg_interaction_result_intimidate_test(value);
      ttype = "??????/??????";}
      else if ("TT"['$===']($case)) {
      value = self.$parren_killer("" + "(0" + (num) + ")").$to_i();
      output = self.$get_torg_interaction_result_taunt_trick(value);
      ttype = "??????/????????????";}
      else if ("MT"['$===']($case)) {
      value = self.$parren_killer("" + "(0" + (num) + ")").$to_i();
      output = self.$get_torg_interaction_result_maneuver(value);
      ttype = "?????????";}
      else if ("DT"['$===']($case)) {
      value = self.$parren_killer("" + "(0" + (num) + ")").$to_i();
      if ($truthy(string['$=~'](/ODT/i))) {
        
        output = self.$get_torg_damage_ords(value);
        ttype = "?????????????????????";
      } else {
        
        output = self.$get_torg_damage_posibility(value);
        ttype = "???????????????????????????????????????";
      };}
      else if ("BT"['$===']($case)) {
      $b = self.$get_torg_bonus_text(num), $a = Opal.to_ary($b), (output = ($a[0] == null ? nil : $a[0])), (value = ($a[1] == null ? nil : $a[1])), $b;
      ttype = "????????????";};
      if ($truthy(ttype['$!='](""))) {
        output = "" + (ttype) + "???[" + (value) + "] ??? " + (output)};
      return output;
    }, $Torg_rollDiceCommand$7.$$arity = 1);
    
    Opal.def(self, '$get_torg_success_level', $Torg_get_torg_success_level$8 = function $$get_torg_success_level(value) {
      var self = this, success_table = nil;

      
      success_table = [[0, "????????????"], [1, "?????????"], [3, "????????????"], [7, "???????????????"], [12, "?????????"]];
      return self.$get_torg_table_result(value, success_table);
    }, $Torg_get_torg_success_level$8.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_intimidate_test', $Torg_get_torg_interaction_result_intimidate_test$9 = function $$get_torg_interaction_result_intimidate_test(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "????????????"], [5, "??????"], [10, "????????????"], [15, "???????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg_get_torg_interaction_result_intimidate_test$9.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_taunt_trick', $Torg_get_torg_interaction_result_taunt_trick$10 = function $$get_torg_interaction_result_taunt_trick(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "????????????"], [5, "??????"], [10, "????????????"], [15, "?????????????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg_get_torg_interaction_result_taunt_trick$10.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_maneuver', $Torg_get_torg_interaction_result_maneuver$11 = function $$get_torg_interaction_result_maneuver(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "????????????"], [5, "??????"], [10, "???????????????"], [15, "?????????????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg_get_torg_interaction_result_maneuver$11.$$arity = 1);
    
    Opal.def(self, '$get_torg_table_result', $Torg_get_torg_table_result$12 = function $$get_torg_table_result(value, table) {
      var $$13, self = this, output = nil;

      
      output = "1";
      (function(){var $brk = Opal.new_brk(); try {return $send(table, 'each', [], ($$13 = function(item){var self = $$13.$$s || this, item_index = nil;

      
        
        if (item == null) {
          item = nil;
        };
        item_index = item['$[]'](0);
        if ($truthy($rb_gt(item_index, value))) {
          
          Opal.brk(nil, $brk)};
        return (output = item['$[]'](1));}, $$13.$$s = self, $$13.$$brk = $brk, $$13.$$arity = 1, $$13))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      return output;
    }, $Torg_get_torg_table_result$12.$$arity = 2);
    
    Opal.def(self, '$get_torg_damage_ords', $Torg_get_torg_damage_ords$14 = function $$get_torg_damage_ords(value) {
      var self = this, damage_table_ords = nil;

      
      damage_table_ords = [[0, "1"], [1, "O1"], [2, "K1"], [3, "O2"], [4, "O3"], [5, "K3"], [6, "?????? K???O4"], [7, "?????? K???O5"], [8, "1???????????????  K???O7"], [9, "1???????????????  K???O9"], [10, "1???????????????  K???O10"], [11, "2???????????????  K???O11"], [12, "2???????????????  KO12"], [13, "3???????????????  KO13"], [14, "3???????????????  KO14"], [15, "4???????????????  KO15"]];
      return self.$get_torg_damage(value, 4, "???????????????  KO15", damage_table_ords);
    }, $Torg_get_torg_damage_ords$14.$$arity = 1);
    
    Opal.def(self, '$get_torg_damage_posibility', $Torg_get_torg_damage_posibility$15 = function $$get_torg_damage_posibility(value) {
      var self = this, damage_table_posibility = nil;

      
      damage_table_posibility = [[0, "1"], [1, "1"], [2, "O1"], [3, "K2"], [4, "2"], [5, "O2"], [6, "?????? O2"], [7, "?????? K2"], [8, "?????? K2"], [9, "1???????????????  K3"], [10, "1???????????????  K4"], [11, "1???????????????  O4"], [12, "1???????????????  K5"], [13, "2???????????????  O4"], [14, "2???????????????  KO5"], [15, "3???????????????  KO5"]];
      return self.$get_torg_damage(value, 3, "???????????????  KO5", damage_table_posibility);
    }, $Torg_get_torg_damage_posibility$15.$$arity = 1);
    
    Opal.def(self, '$get_torg_damage', $Torg_get_torg_damage$16 = function $$get_torg_damage(value, maxDamage, maxDamageString, damage_table) {
      var self = this, table_max_value = nil, over_kill_damage = nil;

      
      if ($truthy($rb_lt(value, 0))) {
        return "1"};
      table_max_value = $rb_minus(damage_table.$length(), 1);
      if ($truthy($rb_le(value, table_max_value))) {
        return self.$get_torg_table_result(value, damage_table)};
      over_kill_damage = $rb_divide($rb_minus(value, table_max_value), 2).$to_i();
      return $rb_plus($rb_plus("", $rb_plus(over_kill_damage, maxDamage).$to_s()), maxDamageString);
    }, $Torg_get_torg_damage$16.$$arity = 4);
    
    Opal.def(self, '$get_torg_bonus_text', $Torg_get_torg_bonus_text$17 = function $$get_torg_bonus_text(num) {
      var self = this, val_arr = nil, value = nil, mod = nil, resultValue = nil, output = nil;

      
      val_arr = num.$split(/\+/);
      value = val_arr.$shift().$to_i();
      mod = self.$parren_killer("" + "(0" + (val_arr.$join("+")) + ")").$to_i();
      resultValue = self.$get_torg_bonus(value);
      self.$debug("TORG BT resultValue", resultValue);
      self.$debug("TORG BT mod", mod);
      if (mod['$=='](0)) {
        output = resultValue.$to_s()
      } else {
        
        output = self.$getTorgBonusOutputTextWhenModDefined(value, resultValue, mod);
        value = "" + (value) + "+" + (mod);
      };
      return [output, value];
    }, $Torg_get_torg_bonus_text$17.$$arity = 1);
    
    Opal.def(self, '$getTorgBonusOutputTextWhenModDefined', $Torg_getTorgBonusOutputTextWhenModDefined$18 = function $$getTorgBonusOutputTextWhenModDefined(value, resultValue, mod) {
      var self = this;

      
      self.$debug("getTorgBonusOutputTextWhenModDefined value, mod", value, mod);
      if ($truthy($rb_gt(mod, 0))) {
        return "" + (resultValue) + "[" + (value) + "]+" + (mod) + " ??? " + ($rb_plus(resultValue, mod))
      } else {
        
        self.$debug("resultValue", resultValue);
        self.$debug("mod", mod);
        return "" + (resultValue) + "[" + (value) + "]" + (mod) + " ??? " + ($rb_plus(resultValue, mod));
      };
    }, $Torg_getTorgBonusOutputTextWhenModDefined$18.$$arity = 3);
    return (Opal.def(self, '$get_torg_bonus', $Torg_get_torg_bonus$19 = function $$get_torg_bonus(value) {
      var self = this, bonus_table = nil, bonus = nil, over_value_bonus = nil;

      
      bonus_table = [[1, -12], [2, -10], [3, -8], [5, -5], [7, -2], [9, -1], [11, 0], [13, 1], [15, 2], [16, 3], [17, 4], [18, 5], [19, 6], [20, 7]];
      bonus = self.$get_torg_table_result(value, bonus_table);
      if ($truthy($rb_gt(value, 20))) {
        
        over_value_bonus = $rb_plus($rb_divide($rb_minus(value, 21), 5).$to_i(), 1);
        bonus = $rb_plus(bonus, over_value_bonus);};
      return bonus;
    }, $Torg_get_torg_bonus$19.$$arity = 1), nil) && 'get_torg_bonus';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
};

/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_lt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs < rhs : lhs['$<'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$require', '$setPrefixes', '$prefixes', '$get_torg_table_result', '$get_torg_damage', '$<', '$-', '$length', '$<=', '$to_i', '$/', '$+', '$*']);
  
  self.$require("diceBot/Torg");
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'Torg1_5');

    var $nesting = [self].concat($parent_nesting), $Torg1_5_get_torg_success_level$1, $Torg1_5_get_torg_interaction_result_intimidate_test$2, $Torg1_5_get_torg_interaction_result_taunt_trick$3, $Torg1_5_get_torg_interaction_result_maneuver$4, $Torg1_5_get_torg_damage_ords$5, $Torg1_5_get_torg_damage_posibility$6, $Torg1_5_get_torg_damage$7;

    
    Opal.const_set($nesting[0], 'ID', "TORG1.5");
    Opal.const_set($nesting[0], 'NAME', "?????????1.5???");
    Opal.const_set($nesting[0], 'SORT_KEY', "?????????1.5");
    self.$setPrefixes($$($nesting, 'Torg').$prefixes());
    
    Opal.def(self, '$get_torg_success_level', $Torg1_5_get_torg_success_level$1 = function $$get_torg_success_level(value) {
      var self = this, success_table = nil;

      
      success_table = [[0, "????????????"], [1, "?????????"], [3, "????????????"], [7, "???????????????"], [12, "?????????"]];
      return self.$get_torg_table_result(value, success_table);
    }, $Torg1_5_get_torg_success_level$1.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_intimidate_test', $Torg1_5_get_torg_interaction_result_intimidate_test$2 = function $$get_torg_interaction_result_intimidate_test(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "??????"], [5, "????????????"], [10, "????????????"], [15, "???????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg1_5_get_torg_interaction_result_intimidate_test$2.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_taunt_trick', $Torg1_5_get_torg_interaction_result_taunt_trick$3 = function $$get_torg_interaction_result_taunt_trick(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "??????"], [5, "????????????"], [10, "????????????"], [15, "?????????????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg1_5_get_torg_interaction_result_taunt_trick$3.$$arity = 1);
    
    Opal.def(self, '$get_torg_interaction_result_maneuver', $Torg1_5_get_torg_interaction_result_maneuver$4 = function $$get_torg_interaction_result_maneuver(value) {
      var self = this, interaction_results_table = nil;

      
      interaction_results_table = [[0, "??????"], [5, "??????"], [10, "????????????"], [15, "?????????????????????"], [17, "???????????????????????????"]];
      return self.$get_torg_table_result(value, interaction_results_table);
    }, $Torg1_5_get_torg_interaction_result_maneuver$4.$$arity = 1);
    
    Opal.def(self, '$get_torg_damage_ords', $Torg1_5_get_torg_damage_ords$5 = function $$get_torg_damage_ords(value) {
      var self = this, damage_table_ords = nil;

      
      damage_table_ords = [[0, "1"], [1, "O1"], [2, "K1"], [3, "O2"], [4, "K2"], [5, "?????? O3"], [6, "?????? K3"], [7, "?????? K???O4"], [8, "1???????????????  KO4"], [9, "1???????????????  K???O5"], [10, "1???????????????  KO5"], [11, "2???????????????  K???O6"], [12, "2???????????????  KO6"], [13, "3???????????????  K???O7"], [14, "3???????????????  KO7"], [15, "4???????????????  KO8"]];
      return self.$get_torg_damage(value, 4, 8, damage_table_ords);
    }, $Torg1_5_get_torg_damage_ords$5.$$arity = 1);
    
    Opal.def(self, '$get_torg_damage_posibility', $Torg1_5_get_torg_damage_posibility$6 = function $$get_torg_damage_posibility(value) {
      var self = this, damage_table_posibility = nil;

      
      damage_table_posibility = [[0, "1"], [1, "1"], [2, "O1"], [3, "K1"], [4, "2"], [5, "O2"], [6, "?????? K2"], [7, "?????? O3"], [8, "?????? K3"], [9, "?????? K???O3"], [10, "1???????????????  K???O4"], [11, "1???????????????  K???O4"], [12, "1???????????????  KO4"], [13, "2???????????????  K???O5"], [14, "2???????????????  KO5"], [15, "3???????????????  KO5"]];
      return self.$get_torg_damage(value, 3, 5, damage_table_posibility);
    }, $Torg1_5_get_torg_damage_posibility$6.$$arity = 1);
    return (Opal.def(self, '$get_torg_damage', $Torg1_5_get_torg_damage$7 = function $$get_torg_damage(value, max_damage, max_shock, damage_table) {
      var self = this, table_max_value = nil, over_kill_value = nil, over_kill_damage = nil, over_kill_shock = nil;

      
      if ($truthy($rb_lt(value, 0))) {
        return "1"};
      table_max_value = $rb_minus(damage_table.$length(), 1);
      if ($truthy($rb_le(value, table_max_value))) {
        return self.$get_torg_table_result(value, damage_table)};
      over_kill_value = $rb_divide($rb_minus(value, table_max_value), 2).$to_i();
      over_kill_damage = $rb_plus(max_damage, $rb_times(over_kill_value, 1));
      over_kill_shock = $rb_plus(max_shock, $rb_times(over_kill_value, 1));
      return "" + (over_kill_damage) + "???????????????  KO" + (over_kill_shock);
    }, $Torg1_5_get_torg_damage$7.$$arity = 4), nil) && 'get_torg_damage';
  })($nesting[0], $$($nesting, 'Torg'), $nesting);
})(Opal);
