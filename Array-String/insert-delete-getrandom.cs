using System;
using System.Collections.Generic;

public class RandomizedSet {
    
    private List<int> lst;
    private Random random;

    public RandomizedSet() {
        lst = new List<int>(); 
        random = new Random();
    }
    
    
    public List<int> getList() {
       return lst;
    }
    
    public bool Insert(int val) {
        if (!this.lst.Contains(val) ){
            lst.Add(val);
            return true;
        }
        return false;
    }
    
    public bool Remove(int val) {
        if (this.lst.Contains(val) ){
            lst.Remove(val);
            return true;
        }
        return false;
    }
    
    public int GetRandom() {
                // Ensure there is at least one element
        if (lst.Count == 0) throw new InvalidOperationException("The set is empty.");
        
        // Get a random index
        int randomIndex = random.Next(lst.Count);
        
        // Return the element at the random index
        return lst[randomIndex];
    }
}