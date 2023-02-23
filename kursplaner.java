import java.util.*;

public class Kursplaner {
    public static void main(String[] args) {
        
        // String a = "De,2AF";
        // String b = "De,2AF";
        // String a52 = "De,2AF";
        // String a53 = "De,2AF";

        // 1.AF, 2.AF, 3.AF Arrays zum vergleichen

        String[] arr0 = {"LK", "3. PF", "4. PF", "5.PK", "De KF FS Ge/PW Ma NW Ph/Ch Sp"};
        String[] arr1 = {"E/S", "De", "2. AF", "Ma", "bel.", "-", "2", "-", "2", "-", "4", "(2)", "4"};
        String[] arr2 = {"E/S", "De", "2. AF", "NW", "bel.", "- 2 - 2 4 - (2) 4"};
        String[] arr3 = {"E/S", "De", "2. AF", "In", "bel.", "- 2 - 2 4 4 (2) 4"};
        // System.out.println(a56);
        Scanner sc = new Scanner(System.in);
        
        
        //if (sc.next().equals("help")) {
        System.out.println("Gebe die folgende Nummer ein, wenn du die Hilfe nutzen möchtest:");
        System.out.println("1: zwei Leistungskurse eingeben und mögliche Optionen für 3.-5. PK bekommen ");
        System.out.println("2: gewählte Fächer eingeben und Prüfung ob erlaubt");
        
        int was = sc.nextInt();
        // if (sc.next().equals("LK")) {
        if (was==1) {
            System.out.println("Gib 1. Leistungskrus ein");
            String eingabe1 = sc.next();
            System.out.println("Gib 2. Leistungskrus ein");
            String eingabe2 = sc.next();

            if (eingabe1.equals("De") || eingabe1.equals("E") || eingabe1.equals("s") || eingabe1.equals("E/S")) {
                if (eingabe2.equals("De") || eingabe2.equals("2AF") && !eingabe1.equals(eingabe2)){
                    System.out.println(Arrays.toString(arr0));
                    System.out.println(Arrays.toString(arr1)); System.out.println(Arrays.toString(arr2)); System.out.println(Arrays.toString(arr3));
                }
            }
        }
            //nächste Option
        else if (was==2) {
            System.out.println("Bitte gebe es in der folgenden Reihenfolge ein, zuerst nur Q1 u. Q2 (11.Klasse) und danach nur Q3 u. Q4 (12. Klasse)");
            System.out.println("LK1,LK2,3.PF,4.PF,5.PK,Fach6,7,8,9,10");
            System.out.println("Folgenden Abkürzungen: De,En,La,Sp,Ja,Mu,BK,DS,PW,Ge,Geo,WW,Ph,StBe,Ma,Phy,Ch,Bi,In,Spo,SpTh");
           
            String Q1 = sc.next();
            String[] ary1 = Q1.split(",");
            String[] ary14 = Arrays.copyOfRange(ary1, 0, 4);
            // System.out.println(Arrays.toString(ary14));
            String[] ary15 = Arrays.copyOfRange(ary1, 0, 5);

            String Q3 = sc.next();
            String[] ary2 = Q3.split(",");
            String[] ary24 = Arrays.copyOfRange(ary2, 0, 4);
            // System.out.println(Arrays.toString(ary14));
            String[] ary25 = Arrays.copyOfRange(ary2, 0, 5);

            System.out.println(Arrays.toString(ary15));
            System.out.println(Arrays.toString(ary25));

            // System.out.println(Arrays.toString(ary1));
            // System.out.println(Arrays.toString(ary2));
            int a = 0, b = 0, c = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0;

            //--------------------------------------------------------------------------------------------------------            
            //Leistungskurse gleich? LK1 und LK2 unterscheiden sich voneinander?
            if (Arrays.equals(ary15,ary25)) {
                a++;
            }else{
                System.out.println("LK1, LK2, 3.-5.PK muessen in Jahren 11 und 12 gleich sein, nicht geschafft");
            }
            //-------------------------------------------------------------------------------------------------------- 
            if (ary1[0].equals("De") || ary1[0].equals("Ma") || ary1[0].equals("Sp") || ary1[0].equals("En") || ary1[0].equals("Ph") || ary1[0].equals("Ch") || ary1[0].equals("Bi") || ary1[1].equals("De") || ary1[1].equals("Ma") || ary1[1].equals("Sp") || ary1[1].equals("Ee") || ary1[1].equals("Ph") || ary1[1].equals("Ch") || ary1[1].equals("Bi")) {
                b++;
            }else{
                System.out.println("Eines der folgenden Faecher:'De, Ma, Sp, En, Ph, Ch, Bi' muss ein LK sein");
            }
            //--------------------------------------------------------------------------------------------------------
            int MaDe1 = 0;
            for (String s : ary1) {
                if (s.equals("Ma") || s.equals("De")) {
                    MaDe1=MaDe1+1;
                    if (MaDe1==2) {
                        for (String sb : ary2) {
                            if (sb.equals("Ma") || sb.equals("De")) {
                                MaDe1=MaDe1+1;
                            }
                        }
                    }
                }
            }
            if (MaDe1==4) {
                c++;
            }else{
                System.out.println("Mathe und Deutsch muessen belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int FremdEn = 0;
            int FremdSp = 0;
            int FremdLa = 0;
            int FremdFr = 0;
            int FremdJa = 0;
            //Eine Fremdsprachefach in Q1,2 und Q3,4 belegt?
            for (String s : ary1) {
                if (s.equals("Sp")) {
                    FremdSp=FremdSp+1;
                    for (String sb : ary2) {
                        if (sb.equals("Sp")) {
                            FremdSp=FremdSp+1;
                        }
                    }
                }
                if (s.equals("En")) {
                    FremdEn=FremdEn+1;
                    for (String sb : ary2) {
                        if (sb.equals("En")) {
                            FremdEn=FremdEn+1;
                        }
                    }
                }
                if (s.equals("La")) {
                    FremdLa=FremdLa+1;
                    for (String sb : ary2) {
                        if (sb.equals("La")) {
                            FremdLa=FremdLa+1;
                        }
                    }
                }
                if (s.equals("Fr")) {
                    FremdFr=FremdFr+1;
                    for (String sb : ary2) {
                        if (sb.equals("La")) {
                            FremdFr=FremdFr+1;
                        }
                    }
                }
                if (s.equals("Ja")) {
                    FremdJa=FremdJa+1;
                    for (String sb : ary2) {
                        if (sb.equals("La")) {
                            FremdJa=FremdJa+1;
                        }
                    }
                }
            }
            if (FremdSp ==2 || FremdEn == 2 || FremdLa == 2 || FremdFr == 2 || FremdJa == 2) {
                d++;
            }else{
                System.out.println("Es muss eine Fremdsprache über 4 Semester belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int Fach2PW = 0;
            int Fach2Ge = 0;
            int Fach2Geo = 0;
            int Fach2WW = 0;
            int Fach2Ph = 0;
            int Af268K = 0;
            //Ein Fach aus 2.Af 4 Semester belegt?
            for (String s : ary1) {
                if (s.equals("PW")) {
                    Fach2PW=Fach2PW+1;
                    for (String sb : ary2) {
                        if (sb.equals("PW")) {
                            Fach2PW=Fach2PW+1;
                            
                            for (String ssb : ary1) {
                                if (ssb.equals("Ge") || ssb.equals("Geo") || ssb.equals("WW") || ssb.equals("Ph") || ssb.equals("StBe")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("Ge") || sbb.equals("Geo") || sbb.equals("WW") || sbb.equals("Ph")) {
                                    Af268K=Af268K+1;
                                }
                            }

                        }
                    }
                }
                if (s.equals("Ge")) {
                    Fach2Ge=Fach2Ge+1;
                    for (String sb : ary2) {
                        if (sb.equals("Ge")) {
                            Fach2Ge=Fach2Ge+1;

                            for (String ssb : ary1) {
                                if (ssb.equals("PW") || ssb.equals("Geo") || ssb.equals("WW") || ssb.equals("Ph") || ssb.equals("StBe")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("PW") || sbb.equals("Geo") || sbb.equals("WW") || sbb.equals("Ph")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            
                        }
                    }
                }
                if (s.equals("Geo")) {
                    Fach2Geo=Fach2Geo+1;
                    for (String sb : ary2) {
                        if (sb.equals("Geo")) {
                            Fach2Geo=Fach2Geo+1;

                            for (String ssb : ary1) {
                                if (ssb.equals("PW") || ssb.equals("Ge") || ssb.equals("WW") || ssb.equals("Ph") || ssb.equals("StBe")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("PW") || sbb.equals("Ge") || sbb.equals("WW") || sbb.equals("Ph")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            
                        }
                    }
                }
                if (s.equals("WW")) {
                    Fach2WW=Fach2WW+1;
                    for (String sb : ary2) {
                        if (sb.equals("WW")) {
                            Fach2WW=Fach2WW+1;

                            for (String ssb : ary1) {
                                if (ssb.equals("PW") || ssb.equals("Ge") || ssb.equals("Geo") || ssb.equals("Ph") || ssb.equals("StBe")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("PW") || sbb.equals("Ge") || sbb.equals("Geo") || sbb.equals("Ph")) {
                                    Af268K=Af268K+1;
                                }
                            }

                        }
                    }
                }
                if (s.equals("Ph")) {
                    Fach2Ph=Fach2Ph+1;
                    for (String sb : ary2) {
                        if (sb.equals("Ph")) {
                            Fach2Ph=Fach2Ph+1;

                            for (String ssb : ary1) {
                                if (ssb.equals("PW") || ssb.equals("Ge") || ssb.equals("Geo") || ssb.equals("WW") || ssb.equals("StBe")) {
                                    Af268K=Af268K+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("PW") || sbb.equals("Ge") || sbb.equals("Geo") || sbb.equals("WW")) {
                                    Af268K=Af268K+1;
                                }
                            }

                        }
                    }
                }
            }
            if (Af268K >= 1) {
                if (Fach2PW == 2 || Fach2WW == 2 || Fach2Ge == 2 || Fach2Geo == 2 || Fach2Ph == 2) {
                    e++;
                }else{
                    System.out.println("6-8 Semester muessen 2 Faecher des 2.AF belegt werden, nicht geschafft");
                }
            }else{
                System.out.println("6-8 Semester muessen 2 Faecher des 2.AF belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int FachBi = 0;
            int FachCh = 0;
            int FachPhy = 0;
            int BiPhCh = 0;
            // Eine Naturwissenschaft 4 Semester belegt?
            for (String s : ary1) {
                if (s.equals("Bi")) {
                    FachBi=FachBi+1;
                    for (String sb : ary2) {
                        if (sb.equals("Bi")) {
                            FachBi=FachBi+1;
                            //Biofound=Biofound+1;
                            for (String ssb : ary1) {
                                if (ssb.equals("Ph") || ssb.equals("Ch")) {
                                    BiPhCh=BiPhCh+1;
                                }
                            }
                            for (String sbb : ary2) {
                                if (sbb.equals("Ph") || sbb.equals("Ch")) {
                                    BiPhCh=BiPhCh+1;
                                }
                            }
                        }
                    }
                }
                if (s.equals("Ch")) {
                    FachCh=FachCh+1;
                    for (String sb : ary2) {
                        if (sb.equals("Ch")) {
                            FachCh=FachCh+1;
                        }
                    }
                }
                if (s.equals("Phy")) {
                    FachPhy=FachPhy+1;
                    for (String sb : ary2) {
                        if (sb.equals("Phy")) {
                            FachPhy=FachPhy+1;
                        }
                    }
                }
            }
            if ( (FachBi == 2 && BiPhCh >= 1) || FachPhy == 2 || FachCh == 2) {
                f++;
            }else{
                System.out.println("Eine Naturwissenschaft muss über 4 Semester belegt werden, nicht geschafft");
                System.out.println("Bei der Wahl von Biologie muessen mindestens zusaetzlich 2 Semester Chemie oder Physik belegt werden");
            }
            //--------------------------------------------------------------------------------------------------------
            int FachSport = 0;
            // Einen Sport Kurs gewählt?
            for (String s : ary1) {
                if (s.equals("Spo")) {
                    FachSport=FachSport+1;
                    for (String sb : ary2) {
                        if (sb.equals("Spo")) {
                            FachSport=FachSport+1;
                        }
                    }
                }
            }
            if (FachSport==2) {
                g++;
            }else{
                System.out.println("Sport Praxis muss über 4 Semester belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int nostsp = 0;
            // Spth nur in 12 und StBe nur in 11?
            for (String s : ary1) {
                if (!s.equals("SpTh")) {
                    //System.out.println("T");
                    nostsp=nostsp+1;
                }
            }
            for (String sb : ary2) {
                if (!sb.equals("StBe")) {
                    nostsp=nostsp+1;
                }
            }
            if (nostsp==(ary1.length+ary2.length)) {
                h++;
            }else{
                System.out.println("Studium und Beruf darf nur im Semester 1. und 2. und SportTheorie darf nur im 3. und 4. belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int Pruef141 = 0;
            int Pruef142 = 0;
            int Pruef143 = 0;
            int Pruef144 = 0;
            // 1-4 Prueffungsfach erfüllt?
            for (String s : ary14) {
                if (s.equals("De")) {
                    Pruef141=Pruef141+1;
                }
                if (s.equals("Ma")) {
                    Pruef142=Pruef142+1;
                }
                if (s.equals("Sp")) {
                    Pruef143=Pruef143+1;
                }
                if (s.equals("En")) {
                    Pruef144=Pruef144+1;
                }
            }
            // Wenn Fr und Jap dazu kommen, einfach Fremdsprachen addieren, wenn >=1, dann nur 1.     Dann De + Ma + FS und pruefen ob >=2
            if ((Pruef141+Pruef142+Pruef143)>= 2 || (Pruef141+Pruef142+Pruef144) >=2) {
                i++;
            }else{
                System.out.println("2 von 3 folgenden Faechern müssen als LK und 3., 4. PF belegt werden: Mathe, Deutsch und Fremdsprache, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int Pruef151 = 0;
            int Pruef152 = 0;
            int Pruef153 = 0;
            for (String s : ary15) {
                if (s.equals("De") || s.equals("En") || s.equals("Sp") || s.equals("Mu") || s.equals("BK") || s.equals("DS")) {
                    Pruef151=Pruef151+1;
                }
                if (s.equals("PW") || s.equals("Ge") || s.equals("Geo") || s.equals("WW") || s.equals("Ph")) {
                    Pruef152=Pruef152+1;
                }
                if (s.equals("Ma") || s.equals("Ph") || s.equals("Ch") || s.equals("Bi") || s.equals("In")) {
                    Pruef153=Pruef153+1;
                }
            }
            if (Pruef151 >= 1 && Pruef152 >= 1 && Pruef153 >= 1) {
                j++;
            }else{
                System.out.println("Alle drei Af muessen von LK und 3,4,5 PK belegt werden, geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int KunstlerFach = 0;
            for (String s : ary1) {
                if (s.equals("Mu") || s.equals("BK") || s.equals("DS")) {
                    KunstlerFach=KunstlerFach+1;
                }
            }
            for (String s : ary2) {
                if (s.equals("Mu") || s.equals("BK") || s.equals("DS")) {
                    KunstlerFach=KunstlerFach+1;
                }
            }
            if (KunstlerFach >=1) {
                k++;
            }else{
                System.out.println("Ein Kunstlerisches Fach muss 2 Semester belegt werden, nicht geschafft");
            }
            //--------------------------------------------------------------------------------------------------------
            int Ges2Sem = 0;
            for (String s : ary2) {
                if (s.equals("Ge")) {
                    Ges2Sem=Ges2Sem+1;
                }
            }
            if (Ges2Sem == 1) {
                l++;
            }else{
                System.out.println("Geschichte muss in der 12. Klasse belegt werden, geschafft");
            }
            //--------------------------------------------------------------------------------------------------------

            //--------------------------------------------------------------------------------------------------------
            System.out.println("");
            if (a>=1 && b>=1 && c>=1 && d>=1 && e>=1 && f>=1 && g>=1 && h>=1 && i>=1 && j>=1 && k>=1 && l>=1) {
                System.out.println("    !!! ALLES GESCHAFFT !!!   ");
                System.out.println("!!! Deine Wahl ist erlaubt !!!");
            }else{
                System.out.println("Fehler, du musst deine Wahl deiner Kurse leider berichtigen");
            }
            //--------------------------------------------------------------------------------------------------------

        //wenn nicht Option 1 oder 2 eingegeben, sondern andere Zahl
        }else{
            System.out.println("Fehler, nur Eingabe Option 1 oder 2");   
        }

    }
}