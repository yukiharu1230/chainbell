/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$setPrefixes', '$join', '$collect', '$prefixes', '$sub', '$===', '$debug', '$last_match', '$to_i', '$getWeaponTable', '$rollJudge', '$[]', '$getJudgeDiceList', '$inject', '$+', '$nil?', '$>=', '$length', '$getSuccessText', '$getWeaponSkillText', '$max', '$loop', '$roll', '$<<', '$%', '$==', '$first', '$<=', '$!=', '$getSkillText', '$empty?', '$to_s', '$upcase', '$getWeaponTableSword', '$getWeaponTableSwordCounter', '$getWeaponTableLongSword', '$getWeaponTableLongSwordCounter', '$getWeaponTableShortSword', '$getWeaponTableShortSwordCounter', '$getWeaponTableSpear', '$getWeaponTableSpearCounter', '$getWeaponTableAx', '$getWeaponTableAxCounter', '$getWeaponTableClub', '$getWeaponTableClubCounter', '$getWeaponTableBow', '$getWeaponTableMartialArt', '$getWeaponTableMartialArtCounter', '$getWeaponTableBoxing', '$getWeaponTableBoxingCounter', '$getWeaponTableProWrestling', '$getWeaponTableProWrestlingCounter', '$getWeaponTableStand', '$getWeaponTableStandCounter', '$getRandMartialArtCounter', '$*', '$each']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'ShinkuuGakuen');

    var $nesting = [self].concat($parent_nesting), $ShinkuuGakuen_rollDiceCommand$1, $ShinkuuGakuen_rollJudge$3, $ShinkuuGakuen_getJudgeDiceList$5, $ShinkuuGakuen_getSuccessText$7, $ShinkuuGakuen_getSkillText$8, $ShinkuuGakuen_getWeaponTable$9, $ShinkuuGakuen_getWeaponTableSword$10, $ShinkuuGakuen_getWeaponTableSwordCounter$11, $ShinkuuGakuen_getWeaponTableLongSword$12, $ShinkuuGakuen_getWeaponTableLongSwordCounter$13, $ShinkuuGakuen_getWeaponTableShortSword$14, $ShinkuuGakuen_getWeaponTableShortSwordCounter$15, $ShinkuuGakuen_getWeaponTableSpear$16, $ShinkuuGakuen_getWeaponTableSpearCounter$17, $ShinkuuGakuen_getWeaponTableAx$18, $ShinkuuGakuen_getWeaponTableAxCounter$19, $ShinkuuGakuen_getWeaponTableClub$20, $ShinkuuGakuen_getWeaponTableClubCounter$21, $ShinkuuGakuen_getWeaponTableBow$22, $ShinkuuGakuen_getWeaponTableMartialArt$23, $ShinkuuGakuen_getWeaponTableMartialArtCounter$24, $ShinkuuGakuen_getRandMartialArtCounter$25, $ShinkuuGakuen_getWeaponTableBoxing$26, $ShinkuuGakuen_getWeaponTableBoxingCounter$27, $ShinkuuGakuen_getWeaponTableProWrestling$28, $ShinkuuGakuen_getWeaponTableProWrestlingCounter$29, $ShinkuuGakuen_getWeaponTableStand$30, $ShinkuuGakuen_getWeaponTableStandCounter$31, $ShinkuuGakuen_getWeaponSkillText$32;

    
    Opal.const_set($nesting[0], 'ID', "ShinkuuGakuen");
    Opal.const_set($nesting[0], 'NAME', "????????????");
    Opal.const_set($nesting[0], 'SORT_KEY', "????????????????????????");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "?????????\n" + "RLx???????????????????????????????????????????????????????????????\n" + "RLx>=y?????????????????????????????? ??? ?????????????????????\n" + "?????????RL10??????RL22>=50\n" + "\n" + "???????????????\n" + "??????????????????????????????????????????\n" + "?????????SW10???BX30\n" + "??????????????????????????????????????????????????????????????????????????????\n" + "??????????????????????????????\n" + "???SW?????????LS????????????SS????????????SP?????????\n" + "???AX?????????CL????????????BW?????????MA????????????\n" + "???BX?????????????????????PR??????????????????ST????????????\n" + "\n" + "????????????????????????\n" + "?????????????????????????????????????????????C????????????????????????????????????\n" + "?????????CSW10???CBX76\n");
    self.$setPrefixes(["CRL.*", "CSW.*", "CLS.*", "CSS.*", "CSP.*", "CAX.*", "CCL.*", "CMA.*", "CBX.*", "CPR.*", "CST.*", "RL.*", "SW.*", "LS.*", "SS.*", "SP.*", "AX.*", "CL.*", "BW.*", "MA.*", "BX.*", "PR.*", "ST.*"]);
    
    Opal.def(self, '$rollDiceCommand', $ShinkuuGakuen_rollDiceCommand$1 = function $$rollDiceCommand(command) {
      var $$2, self = this, prefixesRegText = nil, weaponCommand = nil, base = nil, diff = nil, weaponInfo = nil, output_msg = nil;

      
      prefixesRegText = $send(self.$prefixes(), 'collect', [], ($$2 = function(i){var self = $$2.$$s || this;

      
        
        if (i == null) {
          i = nil;
        };
        return i.$sub(/\.\*/, "");}, $$2.$$s = self, $$2.$$arity = 1, $$2)).$join("|");
      if ($truthy(new RegExp("" + "(^|\\s)(S)?(" + (prefixesRegText) + ")([\\d\\+\\-]*)(>=(\\d+))?", 'i')['$==='](command))) {
      } else {
        
        self.$debug("NOT match");
        return nil;
      };
      self.$debug("matched.");
      weaponCommand = $$($nesting, 'Regexp').$last_match(3);
      base = $$($nesting, 'Regexp').$last_match(4).$to_i();
      diff = $$($nesting, 'Regexp').$last_match(6);
      weaponInfo = self.$getWeaponTable(weaponCommand);
      output_msg = self.$rollJudge(base, diff, weaponInfo);
      return output_msg;
    }, $ShinkuuGakuen_rollDiceCommand$1.$$arity = 1);
    
    Opal.def(self, '$rollJudge', $ShinkuuGakuen_rollJudge$3 = function $$rollJudge(base, diff, weaponInfo) {
      var $$4, self = this, weaponName = nil, weaponTable = nil, diceList = nil, total = nil, allTotal = nil, diffText = nil, result = nil;

      
      self.$debug("rollJudge base", base);
      self.$debug("rollJudge diff", diff);
      weaponName = weaponInfo['$[]']("name");
      weaponTable = weaponInfo['$[]']("table");
      diceList = self.$getJudgeDiceList();
      total = $send(diceList, 'inject', [], ($$4 = function(value, i){var self = $$4.$$s || this;

      
        
        if (value == null) {
          value = nil;
        };
        
        if (i == null) {
          i = nil;
        };
        return (value = $rb_plus(value, i));}, $$4.$$s = self, $$4.$$arity = 2, $$4));
      allTotal = $rb_plus(total, base);
      diffText = (function() {if ($truthy(diff['$nil?']())) {
        return ""
      } else {
        return "" + ">=" + (diff)
      }; return nil; })();
      result = "" + "(" + (weaponName) + "???" + (base) + (diffText) + ") ??? 1D100+" + (base) + " ??? " + (total);
      if ($truthy($rb_ge(diceList.$length(), 2))) {
        result = $rb_plus(result, "" + "[" + (diceList.$join(",")) + "]")};
      result = $rb_plus(result, "" + "+" + (base));
      result = $rb_plus(result, "" + " ??? " + (allTotal));
      result = $rb_plus(result, self.$getSuccessText(allTotal, diff, diceList, weaponTable));
      result = $rb_plus(result, self.$getWeaponSkillText(weaponTable, diceList.$max()));
      self.$debug("check_1D100 result", result);
      return result;
    }, $ShinkuuGakuen_rollJudge$3.$$arity = 3);
    
    Opal.def(self, '$getJudgeDiceList', $ShinkuuGakuen_getJudgeDiceList$5 = function $$getJudgeDiceList() {
      var $$6, self = this, diceList = nil;

      
      diceList = [];
      (function(){var $brk = Opal.new_brk(); try {return $send(self, 'loop', [], ($$6 = function(){var self = $$6.$$s || this, $a, $b, value = nil, rank01 = nil;

      
        $b = self.$roll(1, 100), $a = Opal.to_ary($b), (value = ($a[0] == null ? nil : $a[0])), $b;
        diceList['$<<'](value);
        rank01 = value['$%'](10);
        self.$debug("rank01", rank01);
        if (rank01['$=='](0)) {
          return nil
        } else {
          
          Opal.brk(nil, $brk)
        };}, $$6.$$s = self, $$6.$$brk = $brk, $$6.$$arity = 0, $$6))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      return diceList;
    }, $ShinkuuGakuen_getJudgeDiceList$5.$$arity = 0);
    
    Opal.def(self, '$getSuccessText', $ShinkuuGakuen_getSuccessText$7 = function $$getSuccessText(allTotal, diff, diceList, isWeapon) {
      var $a, self = this, first = nil, result = nil, skillText = nil, success = nil;

      
      first = diceList.$first();
      if ($truthy(first['$nil?']())) {
        return ""};
      if ($truthy($rb_le(first, 9))) {
        return " ??? ???????????????"};
      if ($truthy(($truthy($a = diff['$nil?']()) ? first['$!='](10) : $a))) {
        return ""};
      result = "";
      skillText = self.$getSkillText(first, diff, isWeapon);
      result = $rb_plus(result, skillText);
      if ($truthy(diff['$nil?']())) {
      } else {
        
        if ($truthy(skillText['$empty?']())) {
          result = $rb_plus(result, " ??? ")};
        success = (function() {if ($truthy($rb_ge(allTotal, diff.$to_i()))) {
          return "??????"
        } else {
          return "??????"
        }; return nil; })();
        result = $rb_plus(result, success.$to_s());
      };
      return result;
    }, $ShinkuuGakuen_getSuccessText$7.$$arity = 4);
    
    Opal.def(self, '$getSkillText', $ShinkuuGakuen_getSkillText$8 = function $$getSkillText(first, diff, isWeapon) {
      var self = this, result = nil;

      
      result = "";
      if ($truthy(isWeapon)) {
        return result};
      result = " ??? ";
      if (first['$=='](10)) {
      } else {
        return result
      };
      result = $rb_plus(result, "??????????????????????????????");
      if ($truthy(diff['$nil?']())) {
        return result};
      result = $rb_plus(result, "??????????????????");
      return result;
    }, $ShinkuuGakuen_getSkillText$8.$$arity = 3);
    
    Opal.def(self, '$getWeaponTable', $ShinkuuGakuen_getWeaponTable$9 = function $$getWeaponTable(weaponCommand) {
      var self = this, $case = nil;

      
      self.$debug("getWeaponTable weaponCommand", weaponCommand);
      $case = weaponCommand.$upcase();
      if ("SW"['$===']($case)) {return self.$getWeaponTableSword()}
      else if ("CSW"['$===']($case)) {return self.$getWeaponTableSwordCounter()}
      else if ("LS"['$===']($case)) {return self.$getWeaponTableLongSword()}
      else if ("CLS"['$===']($case)) {return self.$getWeaponTableLongSwordCounter()}
      else if ("SS"['$===']($case)) {return self.$getWeaponTableShortSword()}
      else if ("CSS"['$===']($case)) {return self.$getWeaponTableShortSwordCounter()}
      else if ("SP"['$===']($case)) {return self.$getWeaponTableSpear()}
      else if ("CSP"['$===']($case)) {return self.$getWeaponTableSpearCounter()}
      else if ("AX"['$===']($case)) {return self.$getWeaponTableAx()}
      else if ("CAX"['$===']($case)) {return self.$getWeaponTableAxCounter()}
      else if ("CL"['$===']($case)) {return self.$getWeaponTableClub()}
      else if ("CCL"['$===']($case)) {return self.$getWeaponTableClubCounter()}
      else if ("BW"['$===']($case)) {return self.$getWeaponTableBow()}
      else if ("MA"['$===']($case)) {return self.$getWeaponTableMartialArt()}
      else if ("CMA"['$===']($case)) {return self.$getWeaponTableMartialArtCounter()}
      else if ("BX"['$===']($case)) {return self.$getWeaponTableBoxing()}
      else if ("CBX"['$===']($case)) {return self.$getWeaponTableBoxingCounter()}
      else if ("PR"['$===']($case)) {return self.$getWeaponTableProWrestling()}
      else if ("CPR"['$===']($case)) {return self.$getWeaponTableProWrestlingCounter()}
      else if ("ST"['$===']($case)) {return self.$getWeaponTableStand()}
      else if ("CST"['$===']($case)) {return self.$getWeaponTableStandCounter()};
      return $hash2(["name", "table"], {"name": "??????", "table": nil});
    }, $ShinkuuGakuen_getWeaponTable$9.$$arity = 1);
    
    Opal.def(self, '$getWeaponTableSword', $ShinkuuGakuen_getWeaponTableSword$10 = function $$getWeaponTableSword() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???", "table": [[11, "?????????", "???????????????"], [22, "?????????", "????????????"], [33, "???????????????", "???????????????"], [44, "????????????", "???????????????"], [55, "?????????", "?????????????????????????????????"], [66, "?????????", "???????????????????????????????????????"], [77, "?????????", "????????????????????????"], [88, "??????????????????", "?????????????????????????????????"], [99, "???????????????????????????", "???????????????????????????????????????????????????"], [0, "?????????", "?????????3?????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableSword$10.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableSwordCounter', $ShinkuuGakuen_getWeaponTableSwordCounter$11 = function $$getWeaponTableSwordCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????????????????", "table": [[33, "?????????", "??????????????????"], [44, nil, nil], [55, nil, nil], [66, "???????????????", "???????????????"], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, "?????????", "?????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableSwordCounter$11.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableLongSword', $ShinkuuGakuen_getWeaponTableLongSword$12 = function $$getWeaponTableLongSword() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????", "table": [[11, "???????????????", "???????????????"], [22, "?????????", "???????????????????????????"], [33, "?????????", "????????????????????????"], [44, "?????????????????????", "??????????????????"], [55, "???????????????", "??????????????????????????????????????????"], [66, "?????????", "????????????????????????????????????????????????"], [77, "?????????", "????????????????????????????????????????????????"], [88, "?????????", "????????????????????????????????????????????????????????????"], [99, "???????????????", "????????????????????????????????????????????????"], [0, "???????????????", "??????????????????????????????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableLongSword$12.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableLongSwordCounter', $ShinkuuGakuen_getWeaponTableLongSwordCounter$13 = function $$getWeaponTableLongSwordCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "?????????????????????", "table": [[22, "????????????", "??????????????????"], [33, nil, nil], [44, nil, nil], [55, "??????", "????????????????????????????????????"], [66, nil, nil], [77, nil, nil], [88, "????????????", "?????????????????????????????????"], [99, nil, nil], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableLongSwordCounter$13.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableShortSword', $ShinkuuGakuen_getWeaponTableShortSword$14 = function $$getWeaponTableShortSword() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????", "table": [[11, "????????????", "???????????????"], [22, "?????????????????????", "?????????????????????????????????"], [33, "?????????????????????", "??????????????????????????????"], [44, "????????????????????????", "?????????????????????????????????"], [55, "??????????????????????????????", "????????????????????????????????????"], [66, "?????????????????????", "???????????????"], [77, "????????????????????????", "???????????????????????????????????????"], [88, "??????????????????", "?????????????????????????????????????????????"], [99, "????????????????????????", "??????????????????????????????????????????????????????????????????????????????"], [0, "????????????", "????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableShortSword$14.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableShortSwordCounter', $ShinkuuGakuen_getWeaponTableShortSwordCounter$15 = function $$getWeaponTableShortSwordCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "?????????????????????", "table": [[11, "????????????", "???????????????"], [22, nil, nil], [33, nil, nil], [44, nil, nil], [55, nil, nil], [66, nil, nil], [77, nil, nil], [88, "???????????????", "????????????????????????????????????????????????"], [99, nil, nil], [0, "??????????????????", "???????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableShortSwordCounter$15.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableSpear', $ShinkuuGakuen_getWeaponTableSpear$16 = function $$getWeaponTableSpear() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???", "table": [[11, "????????????", "?????????????????????????????????????????????"], [22, "????????????", "????????????"], [33, "?????????", "???????????????????????????"], [44, "?????????", "????????????"], [55, "?????????", "????????????"], [66, "???????????????????????????", "????????????????????????????????????????????????"], [77, "?????????", "???????????????????????????????????????????????????????????????"], [88, "?????????", "???????????????????????????????????????????????????????????????????????????????????????"], [99, "????????????????????????", "???????????????????????????????????????????????????????????????"], [0, "????????????", "???????????????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableSpear$16.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableSpearCounter', $ShinkuuGakuen_getWeaponTableSpearCounter$17 = function $$getWeaponTableSpearCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????????????????", "table": [[55, "??????", "????????????????????????????????????"], [66, nil, nil], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableSpearCounter$17.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableAx', $ShinkuuGakuen_getWeaponTableAx$18 = function $$getWeaponTableAx() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???", "table": [[11, "???????????????", "????????????????????????"], [22, "???????????????", "?????????????????????"], [33, "?????????", "??????????????????"], [44, "?????????????????????", "????????????"], [55, "???????????????????????????", "???????????????????????????"], [66, "????????????", "???????????????????????????????????????"], [77, "???????????????", "??????????????????????????????????????????????????????"], [88, "????????????????????????", "??????????????????????????????"], [99, "??????????????????????????????", "??????????????????????????????????????????????????????????????????????????????"], [0, "???????????????", "??????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableAx$18.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableAxCounter', $ShinkuuGakuen_getWeaponTableAxCounter$19 = function $$getWeaponTableAxCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????????????????", "table": [[44, "?????????????????????", "????????????????????????????????????"], [55, nil, nil], [66, nil, nil], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableAxCounter$19.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableClub', $ShinkuuGakuen_getWeaponTableClub$20 = function $$getWeaponTableClub() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????", "table": [[11, "??????????????????", "???????????????"], [22, "??????????????????", "???????????????"], [33, "?????????", "????????????????????????"], [44, "???????????????", "???????????????????????????"], [55, "?????????", "?????????????????????????????????"], [66, "?????????", "?????????????????????????????????????????????????????????????????????????????????????????????"], [77, "?????????????????????", "???????????????"], [88, "???????????????", "?????????????????????????????????????????????"], [99, "???????????????", "??????????????????????????????????????????????????????????????????"], [0, "?????????????????????", "??????????????????????????????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableClub$20.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableClubCounter', $ShinkuuGakuen_getWeaponTableClubCounter$21 = function $$getWeaponTableClubCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "?????????????????????", "table": [[11, "??????????????????", "??????????????????"], [22, nil, nil], [33, nil, nil], [44, nil, nil], [55, nil, nil], [66, "?????????????????????", "?????????????????????????????????"], [77, nil, nil], [88, nil, nil], [99, "???????????????", "?????????????????????????????????????????????"], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableClubCounter$21.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableBow', $ShinkuuGakuen_getWeaponTableBow$22 = function $$getWeaponTableBow() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???", "table": [[11, "?????????", "??????????????????????????????"], [22, "??????????????????", "??????????????????????????????"], [33, "??????", "???????????????"], [44, "????????????", "????????????"], [55, "????????????????????????", "????????????????????????????????????????????????"], [66, "????????????", "???????????????????????????"], [77, "?????????", "????????????????????????"], [88, "????????????", "??????????????????????????????????????????"], [99, "?????????????????????", "???????????????"], [0, "?????????", "??????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableBow$22.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableMartialArt', $ShinkuuGakuen_getWeaponTableMartialArt$23 = function $$getWeaponTableMartialArt() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????", "table": [[11, "?????????", "??????????????????????????????????????????"], [22, "????????????????????????", "???????????????"], [33, "?????????", "??????????????????????????????????????????????????????????????????"], [44, "?????????????????????????????????", "????????????????????????????????????"], [55, "?????????", "???????????????????????????"], [66, "????????????????????????", "???????????????????????????"], [77, "????????????????????????", "???????????????"], [88, "???????????????????????????", "????????????????????????????????????????????????"], [99, "?????????", "???????????????????????????????????????????????????????????????"], [0, "????????????", "????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableMartialArt$23.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableMartialArtCounter', $ShinkuuGakuen_getWeaponTableMartialArtCounter$24 = function $$getWeaponTableMartialArtCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "?????????????????????", "table": [[11, "?????????????????????", "??????????????????"], [22, nil, nil], [33, "???????????????", "???????????????"], [44, nil, nil], [55, nil, nil], [66, "???????????????????????????", "????????????????????????????????????"], [77, nil, nil], [88, nil, nil], [99, "????????????????????????", $rb_plus("??????????????????????????????????????????????????????", self.$getRandMartialArtCounter())], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableMartialArtCounter$24.$$arity = 0);
    
    Opal.def(self, '$getRandMartialArtCounter', $ShinkuuGakuen_getRandMartialArtCounter$25 = function $$getRandMartialArtCounter() {
      var $a, $b, self = this, value = nil, dice = nil, tableInfo = nil, weaponTable = nil, result = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (value = ($a[0] == null ? nil : $a[0])), $b;
      dice = $rb_plus($rb_times(value, 10), value);
      if (value['$=='](110)) {
        dice = 100};
      tableInfo = self.$getWeaponTableMartialArt();
      weaponTable = tableInfo['$[]']("table");
      result = "" + " ??? (" + (value) + ")";
      result = $rb_plus(result, self.$getWeaponSkillText(weaponTable, dice));
      return result;
    }, $ShinkuuGakuen_getRandMartialArtCounter$25.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableBoxing', $ShinkuuGakuen_getWeaponTableBoxing$26 = function $$getWeaponTableBoxing() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???????????????", "table": [[11, "???????????????", "??????????????????????????????????????????????????????"], [22, "??????????????????", "???????????????????????????"], [33, "???????????????", "?????????????????????????????????????????????????????????"], [44, "?????????????????????????????????", "????????????????????????????????????"], [55, "???????????????", "????????????????????????????????????????????????"], [66, "???????????????????????????", "??????????????????"], [77, "?????????????????????????????????", "??????????????????????????????????????????????????????????????????????????????????????????"], [88, "????????????????????????", "?????????????????????????????????"], [99, "?????????????????????????????????????????????", "??????????????????????????????????????????????????????"], [0, "???", "???????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableBoxing$26.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableBoxingCounter', $ShinkuuGakuen_getWeaponTableBoxingCounter$27 = function $$getWeaponTableBoxingCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "??????????????????????????????", "table": [[11, "????????????????????????", "???????????????"], [22, "???????????????????????????", "????????????????????????????????????"], [33, nil, nil], [44, nil, nil], [55, nil, nil], [66, nil, nil], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, "?????????????????????", "?????????????????????????????????????????????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableBoxingCounter$27.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableProWrestling', $ShinkuuGakuen_getWeaponTableProWrestling$28 = function $$getWeaponTableProWrestling() {
      var self = this;

      return $hash2(["name", "table"], {"name": "????????????", "table": [[11, "??????????????????", "???????????????"], [22, "?????????????????????", "?????????"], [33, "???????????????", "?????????????????????????????????"], [44, "?????????????????????", "???????????????????????????????????????"], [55, "??????????????????????????????", "???????????????"], [66, "?????????????????????", "????????????????????????????????????"], [77, "??????????????????????????????", "???????????????????????????????????????????????????"], [88, "???????????????", "????????????????????????????????????????????????"], [99, "?????????????????????", "????????????????????????????????????????????????????????????????????????????????????"], [0, "?????????????????????", "???????????????????????????????????????????????????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableProWrestling$28.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableProWrestlingCounter', $ShinkuuGakuen_getWeaponTableProWrestlingCounter$29 = function $$getWeaponTableProWrestlingCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "???????????????????????????", "table": [[22, "??????????????????", "???????????????"], [55, "????????????????????????", "???????????????????????????"], [66, nil, nil], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableProWrestlingCounter$29.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableStand', $ShinkuuGakuen_getWeaponTableStand$30 = function $$getWeaponTableStand() {
      var self = this;

      return $hash2(["name", "table"], {"name": "?????????", "table": [[11, "SILER CHARIOT", "???????????????????????????????????????"], [22, "TOWER OF GRAY", "???????????????"], [33, "DARK BLUE MOON", "???????????????????????????????????????????????????????????????"], [44, "EMPEROR", "???????????????????????????????????????????????????????????????????????????"], [55, "MAGICIAN's RED", "??????????????????????????????????????????????????????"], [66, "DEATH 13", "????????????????????????????????????????????????????????????"], [77, "HIEROPHANT GREEN", "??????????????????????????????????????????"], [88, "VANILLA ICE CREAM", "??????????????????????????????????????????????????????????????????????????????????????????"], [99, "THE WORLD", "????????????????????????????????????"], [0, "STAR PLATINUM", "??????????????????????????????"]]})
    }, $ShinkuuGakuen_getWeaponTableStand$30.$$arity = 0);
    
    Opal.def(self, '$getWeaponTableStandCounter', $ShinkuuGakuen_getWeaponTableStandCounter$31 = function $$getWeaponTableStandCounter() {
      var self = this;

      return $hash2(["name", "table"], {"name": "????????????????????????", "table": [[11, "ANUBIS", "????????????????????????????????????????????????????????????????????????????????????????????????????????????"], [22, nil, nil], [33, nil, nil], [44, nil, nil], [55, nil, nil], [66, "YELLOW TEMPERANE", "?????????????????????????????????????????????????????????"], [77, nil, nil], [88, nil, nil], [99, nil, nil], [0, nil, nil]]})
    }, $ShinkuuGakuen_getWeaponTableStandCounter$31.$$arity = 0);
    return (Opal.def(self, '$getWeaponSkillText', $ShinkuuGakuen_getWeaponSkillText$32 = function $$getWeaponSkillText(weaponTable, dice) {try {

      var $$33, self = this, preName = nil, preEffect = nil;

      
      self.$debug("getWeaponSkillText", dice);
      if ($truthy(weaponTable['$nil?']())) {
        return ""};
      preName = "";
      preEffect = "";
      $send(weaponTable, 'each', [], ($$33 = function(index, name, effect){var self = $$33.$$s || this, $a;

      
        
        if (index == null) {
          index = nil;
        };
        
        if (name == null) {
          name = nil;
        };
        
        if (effect == null) {
          effect = nil;
        };
        name = ($truthy($a = name) ? $a : preName);
        preName = name;
        effect = ($truthy($a = effect) ? $a : preEffect);
        preEffect = effect;
        if (index['$=='](dice['$%'](100))) {
        } else {
          return nil;
        };
        Opal.ret("" + " ??? ???" + (name) + "???" + (effect));}, $$33.$$s = self, $$33.$$arity = 3, $$33));
      return "";
      } catch ($returner) { if ($returner === Opal.returner) { return $returner.$v } throw $returner; }
    }, $ShinkuuGakuen_getWeaponSkillText$32.$$arity = 2), nil) && 'getWeaponSkillText';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
